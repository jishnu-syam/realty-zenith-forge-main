import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase as typedSupabase } from "@/integrations/supabase/client";
// Admin CRUD works against arbitrary tables — bypass generated row types.
// RLS still enforces who can read/write each table.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const supabase = typedSupabase as any;
import { Plus, Edit2, Trash2, X, Save } from "lucide-react";
import { toast } from "sonner";

export type FieldType = "text" | "textarea" | "number" | "boolean" | "url" | "tags" | "json";

export type FieldDef = {
  key: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  required?: boolean;
  hideInTable?: boolean;
};

export type AdminCrudProps = {
  table: string;
  title: string;
  fields: FieldDef[];
  orderBy?: { column: string; ascending?: boolean };
  primaryKey?: string;
};

type Row = Record<string, unknown> & { id?: string };

export function AdminCrud({
  table,
  title,
  fields,
  orderBy,
  primaryKey = "id",
}: AdminCrudProps) {
  const qc = useQueryClient();
  const [editing, setEditing] = useState<Row | null>(null);

  const list = useQuery({
    queryKey: ["admin", table],
    queryFn: async () => {
      let q = supabase.from(table).select("*");
      if (orderBy) q = q.order(orderBy.column, { ascending: orderBy.ascending ?? true });
      const { data, error } = await q;
      if (error) throw new Error(error.message);
      return (data ?? []) as Row[];
    },
  });

  const save = useMutation({
    mutationFn: async (row: Row) => {
      const payload: Row = { ...row };
      // normalize tags fields
      for (const f of fields) {
        if (f.type === "tags" && typeof payload[f.key] === "string") {
          payload[f.key] = (payload[f.key] as string)
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean);
        }
        if (f.type === "json" && typeof payload[f.key] === "string") {
          try {
            payload[f.key] = JSON.parse((payload[f.key] as string) || "{}");
          } catch {
            throw new Error(`Invalid JSON for ${f.label}`);
          }
        }
        if (f.type === "number" && typeof payload[f.key] === "string") {
          payload[f.key] = payload[f.key] === "" ? null : Number(payload[f.key]);
        }
      }
      if (row[primaryKey]) {
        const id = row[primaryKey];
        const { [primaryKey]: _omit, ...rest } = payload;
        void _omit;
        const { error } = await supabase.from(table).update(rest).eq(primaryKey, id);
        if (error) throw new Error(error.message);
      } else {
        const { error } = await supabase.from(table).insert(payload);
        if (error) throw new Error(error.message);
      }
    },
    onSuccess: () => {
      toast.success("Saved");
      setEditing(null);
      qc.invalidateQueries({ queryKey: ["admin", table] });
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const remove = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from(table).delete().eq(primaryKey, id);
      if (error) throw new Error(error.message);
    },
    onSuccess: () => {
      toast.success("Deleted");
      qc.invalidateQueries({ queryKey: ["admin", table] });
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const visibleFields = fields.filter((f) => !f.hideInTable);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-display text-2xl text-navy">{title}</h2>
        <button
          onClick={() => setEditing({})}
          className="inline-flex items-center gap-2 bg-navy text-white px-4 py-2.5 text-xs font-bold uppercase tracking-[0.18em] hover:bg-gold hover:text-navy transition-colors"
        >
          <Plus className="size-4" /> Add
        </button>
      </div>

      {list.isLoading && <p className="text-muted-foreground">Loading...</p>}
      {list.error && <p className="text-destructive">{(list.error as Error).message}</p>}

      {list.data && (
        <div className="border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-mist">
              <tr>
                {visibleFields.map((f) => (
                  <th key={f.key} className="text-left px-4 py-3 text-[10px] font-bold uppercase tracking-[0.18em]">
                    {f.label}
                  </th>
                ))}
                <th className="px-4 py-3 w-32"></th>
              </tr>
            </thead>
            <tbody>
              {list.data.map((row) => (
                <tr key={String(row[primaryKey])} className="border-t border-border">
                  {visibleFields.map((f) => (
                    <td key={f.key} className="px-4 py-3 max-w-[260px] truncate">
                      {formatCell(row[f.key], f.type)}
                    </td>
                  ))}
                  <td className="px-4 py-3 text-right">
                    <button
                      onClick={() => setEditing(row)}
                      className="inline-flex items-center gap-1 text-navy hover:text-gold mr-3"
                    >
                      <Edit2 className="size-3.5" /> Edit
                    </button>
                    <button
                      onClick={() => {
                        if (confirm("Delete this entry?")) remove.mutate(String(row[primaryKey]));
                      }}
                      className="text-destructive hover:text-destructive/80"
                    >
                      <Trash2 className="size-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
              {list.data.length === 0 && (
                <tr>
                  <td colSpan={visibleFields.length + 1} className="text-center py-10 text-muted-foreground">
                    No entries yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {editing && (
        <EditorDrawer
          row={editing}
          fields={fields}
          onClose={() => setEditing(null)}
          onSave={(r) => save.mutate(r)}
          saving={save.isPending}
        />
      )}
    </div>
  );
}

function formatCell(v: unknown, t: FieldType) {
  if (v === null || v === undefined) return "—";
  if (t === "boolean") return v ? "Yes" : "No";
  if (t === "tags" && Array.isArray(v)) return v.join(", ");
  if (t === "json") return JSON.stringify(v);
  return String(v);
}

function EditorDrawer({
  row,
  fields,
  onClose,
  onSave,
  saving,
}: {
  row: Row;
  fields: FieldDef[];
  onClose: () => void;
  onSave: (r: Row) => void;
  saving: boolean;
}) {
  const [state, setState] = useState<Row>(() => {
    const init: Row = { ...row };
    for (const f of fields) {
      if (f.type === "tags" && Array.isArray(init[f.key])) {
        init[f.key] = (init[f.key] as string[]).join(", ");
      }
      if (f.type === "json" && typeof init[f.key] === "object" && init[f.key] !== null) {
        init[f.key] = JSON.stringify(init[f.key], null, 2);
      }
    }
    return init;
  });

  const setField = (k: string, v: unknown) => setState((s) => ({ ...s, [k]: v }));

  return (
    <div className="fixed inset-0 z-50 flex justify-end" role="dialog">
      <div className="absolute inset-0 bg-navy/40" onClick={onClose} />
      <div className="relative w-full max-w-2xl bg-background h-full overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-background border-b border-border px-8 py-5 flex items-center justify-between z-10">
          <h3 className="font-display text-xl">{row.id ? "Edit Entry" : "New Entry"}</h3>
          <button onClick={onClose}><X className="size-5" /></button>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSave(state);
          }}
          className="p-8 space-y-5"
        >
          {fields.map((f) => (
            <label key={f.key} className="block">
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] mb-2 block">
                {f.label} {f.required && <span className="text-gold">*</span>}
              </span>
              {f.type === "textarea" || f.type === "json" ? (
                <textarea
                  rows={f.type === "json" ? 6 : 5}
                  required={f.required}
                  placeholder={f.placeholder}
                  value={(state[f.key] as string) ?? ""}
                  onChange={(e) => setField(f.key, e.target.value)}
                  className="w-full border border-border px-4 py-3 focus:outline-none focus:border-gold font-mono text-sm"
                />
              ) : f.type === "boolean" ? (
                <select
                  value={state[f.key] ? "true" : "false"}
                  onChange={(e) => setField(f.key, e.target.value === "true")}
                  className="w-full border border-border px-4 py-3 focus:outline-none focus:border-gold"
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              ) : (
                <input
                  type={f.type === "number" ? "number" : "text"}
                  required={f.required}
                  placeholder={f.placeholder}
                  value={(state[f.key] as string) ?? ""}
                  onChange={(e) => setField(f.key, e.target.value)}
                  className="w-full border border-border px-4 py-3 focus:outline-none focus:border-gold"
                />
              )}
              {f.type === "tags" && (
                <p className="mt-1 text-[10px] text-muted-foreground">Comma-separated</p>
              )}
            </label>
          ))}
          <button
            type="submit"
            disabled={saving}
            className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] hover:bg-gold hover:text-navy transition-colors disabled:opacity-60"
          >
            <Save className="size-4" /> {saving ? "Saving..." : "Save"}
          </button>
        </form>
      </div>
    </div>
  );
}
