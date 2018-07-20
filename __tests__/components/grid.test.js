import React from "react";
import Grid from "../../src/shared/components/grid";
import { shallow } from "enzyme";

describe("Grid", () => {
  const props = {
      match: {
          params: {
              country: 'be',
          },
      },
  };
  test("should match snapshot if no articles", () => {
    const fetchInitialData = jest.fn().mockImplementation(() => Promise.resolve());
    global.__isBrowser__ = true;
    const wrapper = shallow(<Grid {...props} fetchInitialData={fetchInitialData} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should match snapshot with articles", () => {
      const articles = [
          {
              title: 'title',
              url: '/some/url',
              urlToImage: 'urlToImage',
          },
          {
            title: 'title2',
            url: '/some/url2',
            urlToImage: 'urlToImage2',
            publishedAt: '15-04-2018',
          },
      ];
    const fetchInitialData = jest.fn().mockImplementation(() => Promise.resolve(articles));
    global.__isBrowser__ = true;
    window.__INITIAL_DATA__ = articles;
    const wrapper = shallow(<Grid {...props} fetchInitialData={fetchInitialData} />);
    expect(wrapper).toMatchSnapshot();
  });
});
