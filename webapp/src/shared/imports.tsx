const routes = require.context(
	// O caminho relativo da pasta
	'../pages',
	// Se deve ou não olhar subpastas
	true,
	// Expressão regular para localizar nomes
	/.route./
);

const slices = require.context(
	// O caminho relativo da pasta
	'../pages',
	// Se deve ou não olhar subpastas
	true,
	// Expressão regular para localizar nomes
	/.slice./
);

export { routes, slices };
  