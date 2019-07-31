import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Input from "./Input";

const DialogLayout = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OpacityBackground = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background: #fff;
  top: 0px;
  left: 0px;
  opacity: 0.7;
`;

const Dialog = styled.div`
  position: absolute;
  z-index: 1999;
  width: 400px;
  height: 260px;
  background: #fff;
  border: 1px solid #dedede;
  padding: 20px;
`;

const DialogHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const DialogContent = styled.div`
  padding: 10px;
`;

const FormItem = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 20px 0px;
`;

const Label = styled.div`
  width: 100px;
`;

const DialogFooter = styled.div`
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Warn = styled.div`
  font-size: 12px;
  color: red;
`;

interface Item {
  title: string;
  num: string;
}

interface Props {
  onClose: () => void;
  handleAdd: (value: Item) => void;
}

export default function AddDialogContainer(props: Props) {
  const { onClose, handleAdd } = props;
  const [formData, setFormData] = useState({ title: "", num: "" });
  const [error, setError] = useState(false);

  const handleChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleClose = () => {
    onClose();
    setFormData({ title: "", num: "" });
  };

  const handleClick = () => {
    const regex = /^\p{Number}+$/u;
    if (regex.test(formData.num)) {
      handleAdd(formData);
      handleClose();
      setFormData({ title: "", num: "" });
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <DialogLayout>
      <OpacityBackground />
      <Dialog>
        <DialogHeader>添加</DialogHeader>
        <DialogContent>
          <FormItem>
            <Label>版本信息</Label>
            <Input
              type="text"
              value={formData.title}
              onChange={e => handleChange("title", e.target.value)}
            />
          </FormItem>
          <FormItem>
            <Label>版本号</Label>
            <div>
              <Input
                type="text"
                value={formData.num}
                onChange={e => handleChange("num", e.target.value)}
              />
              {error && <Warn>版本号只能填写数字</Warn>}
            </div>
          </FormItem>
        </DialogContent>
        <DialogFooter>
          <Button onClick={handleClick}>确定</Button>
          <Button onClick={handleClose}>取消</Button>
        </DialogFooter>
      </Dialog>
    </DialogLayout>
  );
}
