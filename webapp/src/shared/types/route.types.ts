interface RouteType {
    name: string,
    path: string,
    accessControl: boolean,
    element: unknown,
    breadCrumb: Array<BreadCrumbType>
}

type BreadCrumbType = {
    text: string,
    link?: string,
}

export default RouteType;