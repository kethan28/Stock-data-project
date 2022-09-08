import Search from './components/Search';
import React from 'react'
import { render, screen ,fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
//import '@testing-library/jest-dom/extend-expect';


describe('search component test', () => {

    test('Renders correctly initial document', async () => {
        render(<Search />);
    });

    test('Test the text search', async () => {
        render(<Search />)
        await userEvent.click(await screen.findByText('Search'))
    })
    test('Test for input', async () => {
        render(<Search/>)
        fireEvent.click(screen.getByTestId('app-input'))
    })
    test('Test for search button', async () => {
        render(<Search/>)
        fireEvent.click(screen.getByTestId('submit-button'))
    })
    // test('search is made on by clicking on search button and result found - test 1', async () => {
    //         render(<Search/>)
    //     // let {getByTestId, queryByTestId} = render();
    //     fireEvent.click(screen.getByTestId('app-input'))
    //     fireEvent.click(screen.getByTestId('submit-button'))
    //     const url = 'https://jsonmock.hackerrank.com/api/stocks?date=5-January-2000';
      
    //     fetchMock.getOnce(url, JSON.stringify({
    //       page: 1,
    //       per_page: 10,
    //       total: 0,
    //       total_pages: 0,
    //       data: [{"date": "5-January-2000", "open": 5265.09, "high": 5464.35, "low": 5184.48, "close": 5357}]
    //     }));
    //     fireEvent.input(input, {
    //       target: {value: '5-January-2000'}
    //     });
    //     fireEvent.click(Search);
    //     await waitFor(() => {
    //       const results = getByTestId('stock-data');
    //       expect(results.childNodes).toHaveLength(4);
    //       expect(results.childNodes[0]).toHaveTextContent('Open: 5265.09');
    //       expect(results.childNodes[1]).toHaveTextContent('Close: 5357');
    //       expect(results.childNodes[2]).toHaveTextContent('High: 5464.35');
    //       expect(results.childNodes[3]).toHaveTextContent('Low: 5184.48');
    //       expect(getByTestId('no-result')).toBe(null);
      
    //     });
      
    //   });
})





