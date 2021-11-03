export interface MenuData {
  name: string;
  key: string | number;
  parent: '1' | '0';
  isParent: boolean;
  type?: '1' | '2' | '3'; // 1：固定不可折叠 2：不固定 不可以添加 可展开 3：不固定 可以添加 可展开
  children?: MenuData[];
  icon?: string;
  updateDate?: string | number;
  path?: string;
  isAddItem?: boolean;
  isOperation?: boolean;
  isEdit: boolean;
}

