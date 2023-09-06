class PairsPresenter {
  readonly data: string[];

  readonly total: number;

  constructor(data: string[]) {
    this.data = data;
    this.total = data.length;
  }
}

export default PairsPresenter;
