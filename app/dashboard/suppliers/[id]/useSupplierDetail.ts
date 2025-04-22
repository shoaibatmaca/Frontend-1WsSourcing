import { useEffect, useState } from "react";

export function useSupplierDetail(id: string) {
  const [supplier, setSupplier] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    fetch(`http://localhost:8000/suppliers/${id}/`)
      .then((res) => res.json())
      .then((data) => setSupplier(data))
      .catch((err) => console.error("Supplier detail fetch error:", err))
      .finally(() => setLoading(false));
  }, [id]);

  return { supplier, loading };
}
