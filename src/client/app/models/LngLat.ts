
export class LngLat {
  public lng: number;
  public lat: number;

  constructor();
  constructor(lng: number, lat: number);
  constructor(lng?: number, lat?: number) {
    this.lng = lng || 0;
    this.lat = lat || 0;
  }

  public fromArray(lnglat: number[]): LngLat {
    this.lng = lnglat[0];
    this.lat = lnglat[1];
    return this;
  }

  public toArray(): number[] {
    return [this.lng, this.lat];
  }

  public setLng(lng: number): LngLat {
    this.lng = Number(lng);
    return this;
  }

  public getLng(): number {
    return Number(this.lng);
  }

  public setLat(lat: number): LngLat {
    this.lat = Number(lat);
    return this;
  }

  public getLat(): number {
    return Number(this.lat);
  }
}
