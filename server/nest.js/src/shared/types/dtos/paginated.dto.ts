export interface IPaginatedDto<ItemsType> {
  page: number;
  maxPage: number;
  perPage: number;
  total: number;
  items: ItemsType;
}
