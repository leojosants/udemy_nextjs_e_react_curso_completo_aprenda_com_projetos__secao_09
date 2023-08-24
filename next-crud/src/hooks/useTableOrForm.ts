import { useState } from "react";
import { Visible } from "../components/types/Visible";

export default function useTableOrForm() {
    const [visible, setVisible] = useState<Visible>('table');

    const showTable = () => setVisible('table');
    const showForm = () => setVisible('form');

    return {
        visibleForm: visible === 'form',
        visibleTable: visible === 'table',
        showTable,
        showForm,
    };
};