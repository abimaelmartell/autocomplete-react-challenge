import names from './names.json';

const fetchSearch = (query) => {
  const promise = new Promise((resolve) => {
    if (query === '') {
      resolve([]);
    };

    const regex = new RegExp(query, 'i')

    // simulate api
    setTimeout(() => {
      const results = names
        .filter(entry => (regex.test(entry)))
        .slice(0, 20);

      resolve(results);
    }, 100);
  });

  return promise;
};

export {
  fetchSearch
};
