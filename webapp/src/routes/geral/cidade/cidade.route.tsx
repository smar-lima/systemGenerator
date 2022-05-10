/* eslint-disable indent */
import { CidadeGrid } from '../../../pages/geral/cidade/components/cidade.grid';
import { CidadeForm } from '../../../pages/geral/cidade/components/cidade.form';

const base = '/app/geral/cidade';

export const CidadeRoute = [
    {
        path: base,
        children: [
			{
                path: `${base}`,
                element: <CidadeGrid />,
            },
			{
                path: `${base}/add`,
                element: <CidadeForm />,
            },
			{
                path: `${base}/edit/:id`,
                element: <CidadeForm />,
            },
			{
                path: `${base}/view/:id`,
                element: <CidadeForm />,
            },
        ],
    },
];