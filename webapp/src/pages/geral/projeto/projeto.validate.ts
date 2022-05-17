import { useCallback } from 'react';
import * as Yup from 'yup';

export const projetoYupResolver: any = (validationSchema: any) =>
	useCallback(
		async (data: any) => {
			try {
				const values = await validationSchema.validate(data, {
					abortEarly: false
				});

				return {
					values,
					errors: {}
				};
			} catch (errors: any) {
				return {
					values: {},
					errors: errors.inner.reduce(
						(allErrors: any, currentError: any) => ({
							...allErrors,
							[currentError.path]: {
								type: currentError.type ?? 'validation',
								message: currentError.message
							}
						}),
						{}
					)
				};
			}
		},
		[validationSchema]
	);
