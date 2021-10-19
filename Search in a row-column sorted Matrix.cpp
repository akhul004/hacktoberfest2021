#include<bits/stdc++.h> 
using namespace std;

 // } Driver Code Ends



class Solution
{
    public:
    bool bs(vector<int> a, int n, int k)
	{
		int low = 0;
		int high = n - 1;
		int mid = (high + low) / 2;
		while (low <= high && a[mid] != k)
		{
			if (a[mid] > k)
				high = mid - 1;
			else
				low = mid + 1;

			mid = (high + low) / 2;
		}

		if (a[mid] == k)
			return true;
		else
			return false;
	}
    //Function to search a given number in row-column sorted matrix.
    bool search(vector<vector<int> > matrix, int n, int m, int x) 
    {
        // code here 
        for (int i = 0; i < n; i++)
		{
			if(bs(matrix.at(i), m, x))
				return true;
		}
		return false;
    }
};

// { Driver Code Starts.
int main() 
{ 
	int t;
    cin>>t;
    while(t--)
    {

 		int n, m;
    	cin>> n>> m;
        vector<vector<int> > matrix(n);
            
        for(int i=0; i<n; i++)
        {
            matrix[i].assign(m, 0);
            for( int j=0; j<m; j++)
            {
                cin>>matrix[i][j];
            }
        }
        
        int x;
        cin>>x;
        Solution obj;
        if (obj.search(matrix,n,m,x)) 
            cout << "1\n"; 
        else
            cout << "0\n"; 
    }
	return 0; 
} 

  // } Driver Code Ends
