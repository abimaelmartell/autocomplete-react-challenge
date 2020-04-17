import names from './names.json';

const RESULTS_LIMIT = 20;

const fetchSearch = (query) => {
  const promise = new Promise((resolve) => {
    if (query === '') {
      resolve([]);
    };

    const regex = new RegExp(query, 'i')

    const results = names
      .filter(entry => (regex.test(entry)))
      .slice(0, RESULTS_LIMIT);

    resolve(results);
  });

  return promise;
};

export {
  fetchSearch
};
