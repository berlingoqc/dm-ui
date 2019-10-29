
export interface PageInfo {
  extracted_on: number;
  itemsAdded: string[];
}

export interface CrawlingRunInfo {
  crawler: string;
  browsing: string;
  starting: number;
  current: number;
  id: number;
  ending: number;
  status: string;
  error: string;
  pageinfos: PageInfo[];
}


export interface TorrentDetail {
  name: string;
  detail_link: string;
  size: string;
  by: string;
  flags: string[];
}

export interface Record {
  extract_on: number;
  source: string;
  detail: TorrentDetail;
  link: string;
}

export interface Entity {
  name: string;
  records: Record[];
}

export interface IntervalCrawled {
  id: number;
  interval: number[];
}

export interface PagingSearch {
  limit: number;
  offset: number;
  orderBy: string[];
  query: string;
  category: string;
}

export interface PagingInfo {
  item_count: number;
  nbr_page: number;
  current_page: number;
}
