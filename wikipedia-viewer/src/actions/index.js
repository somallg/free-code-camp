import $ from 'jquery';

const WIKIPEDIA_API = 'https://en.wikipedia.org/w/api.php';



export const searchWiki = (term) => {
  return $.ajax({
      url: `${WIKIPEDIA_API}`,
      data: {
        action: 'opensearch',
        format: 'json',
        callback: 'parseWikiData',
        search: term
      },
      dataType: 'jsonp'
    }
  );
};
