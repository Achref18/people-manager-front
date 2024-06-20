import Modal from "@mui/material/Modal";
import { StyledModalPaper } from "./modal.styles";
import { BasicModalProps } from "./Modal.type";
import { closeModal } from "@redux/slices/uiSlice";
import { useAppDispatch, useAppSelector } from "@hooks/useAppState.hook";
import { RootState } from "@redux/store";

export default function BasicModal({ children }: BasicModalProps) {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state: RootState) => state.ui.open);

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <StyledModalPaper>{children}</StyledModalPaper>
    </Modal>
  );
}
