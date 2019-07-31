import { useState, useEffect } from "react";
import {
  getAllVersions,
  postNewVersion,
  deleteVersion,
  putVersion
} from "../services/apis";

interface ItemProps {
  title: string;
  num: string;
  id: string;
}

interface Item {
  title: string;
  num: string;
}

export default function useDataMange() {
  const [items, setItems] = useState();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getAllVersions().then(data => {
      setItems(data);
    });
  }, []);

  const handleChange = (value: { title: string; num: string; id: string }) => {
    putVersion(value).then(result => {
      if (result) {
        const idx = items.findIndex((item: ItemProps) => item.id === value.id);
        if (idx !== -1) {
          setItems([...items.slice(0, idx), value, ...items.slice(idx + 1)]);
        }
      }
    });
  };

  const handleDelete = (id: string) => {
    deleteVersion(id).then(result => {
      if (result) {
        const idx = items.findIndex((item: ItemProps) => item.id === id);
        if (idx !== -1) {
          setItems([...items.slice(0, idx), ...items.slice(idx + 1)]);
        }
      }
    });
  };

  const handleAdd = (value: Item) => {
    postNewVersion(value).then(data => {
      if (data) {
        setItems([...items, data]);
      }
    });
  };

  return { items, open, setOpen, handleChange, handleDelete, handleAdd };
}
