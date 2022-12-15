export interface TodoListItem {
    id?: number,
    label: string,
    description:  string,
    category: string,
    done: boolean | string;
}