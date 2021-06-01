const Paginate = (newsData) => {
  const itemsPerPage = 10;
  const pages = Math.ceil(newsData.length / itemsPerPage);
  const newNewsData = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
    return newsData.slice(start, start + itemsPerPage);
  });
  return newNewsData;
};

export default Paginate;
