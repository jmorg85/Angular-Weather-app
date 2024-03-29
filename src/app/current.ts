import { Condition } from "./condition";

export interface Current {
    last_updated_epoch: string,
    last_updated: string,
    temp_c: number,
    temp_f: number,
    is_day: number,
    condition: Condition,
    wind_mph: number,
    wind_kph: number,
    wind_degree: number,
    wind_dir: string,
    pressure_mb: number,
    pressure_in: number,
    precip_mm: number,
    humidity: number,
    cloud: number,
    feelslike_c: number,
    feelslike_f: number,
    vis_km: number,
    vis_miles: number,
    uv: number,
    gust_kph: number
}
