import { AnyAsyncThunk } from '@reduxjs/toolkit/dist/matchers';

interface RouteType {
    name: string,
    path: string,
    accessControl: boolean,
    element: unknown,
    key: any,
    breadCrumb: Array<BreadCrumbType>
}

type BreadCrumbType = {
    text: string,
    link?: string,
}

export default RouteType;