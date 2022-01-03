export interface ItemType {
    _id: string;
    content: string;
    isCompleted: boolean;
}

export interface ItemProps {
    text: string;
    id: string;
    isCompleted: boolean;
    deleteItem: (id: string) => void;
    editItem: (id: string, content: string) => void;
    checkItem: (id: string) => void;
}
