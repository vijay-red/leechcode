
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { ProblemsApiService} from './problems-api.service';
import { Problem } from './problem';

describe('ProblemsApiService', () => {
  let httpTestingController: HttpTestingController;
  let service: ProblemsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.get(HttpTestingController);

    service = TestBed.get(ProblemsApiService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('#getProblemBySlug should return expected data', (done) => {
    const expectedData: Problem[] = [
        {
            "title": "Coin Change",
            "titleSlug": "coin-change",
            "content": "<p>You are given an integer array <code>coins</code> representing coins of different denominations and an integer <code>amount</code> representing a total amount of money.</p>\n\n<p>Return <em>the fewest number of coins that you need to make up that amount</em>. If that amount of money cannot be made up by any combination of the coins, return <code>-1</code>.</p>\n\n<p>You may assume that you have an infinite number of each kind of coin.</p>\n\n<p>&nbsp;</p>\n<p><strong>Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> coins = [1,2,5], amount = 11\n<strong>Output:</strong> 3\n<strong>Explanation:</strong> 11 = 5 + 5 + 1\n</pre>\n\n<p><strong>Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> coins = [2], amount = 3\n<strong>Output:</strong> -1\n</pre>\n\n<p><strong>Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> coins = [1], amount = 0\n<strong>Output:</strong> 0\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= coins.length &lt;= 12</code></li>\n\t<li><code>1 &lt;= coins[i] &lt;= 2<sup>31</sup> - 1</code></li>\n\t<li><code>0 &lt;= amount &lt;= 10<sup>4</sup></code></li>\n</ul>\n",
            "difficulty": "Medium",
            "likes": 9761,
            "dislikes": 238,
            "exampleTestCases": "[1,2,5]\n11\n[2]\n3\n[1]\n0",
            "hints": "Think of sub-problems"
        }
    ];

    service.getProblemBySlug("coin-change").subscribe(data => {
        console.log("THIS IS DATA", data);
        console.log("THIS IS EXPECTEDDATA", expectedData);
      expect(data).toEqual(expectedData);
      done();
    });

    const testRequest = httpTestingController.expectOne('http://localhost:8080/api/v1/problems/coin-change');

    testRequest.flush(expectedData);
  });


});
