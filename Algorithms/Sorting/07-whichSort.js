//#1 - Sort 10 schools around your house by distance:
insertion sort
//Because: Small input commends something simple

//#2 - eBay sorts listings by the current Bid amount:
radix or counting sort
//Because: Its a fixed length of integers so we know the input is going to be numbers within a certain range.

//#3 - Sport scores on ESPN
Quick sort
//Because: We are going to be dealing with different types of scores from different sports, and also since it gives a better space complexity

//#4 - Massive database (can't fit all into memory) needs to sort through past year's user data
Merge Sort
//Because: We are not going to be sorting in memory since the data is so big but because the data is so Big then we need to think about worst case performance

//#5 - Almost sorted Udemy review data needs to update and add 2 new reviews
Insertion Sort
//Because: Although the data might be huge, we asume that most och the previous data is already sorted, and all Im doing is added to new reviews, Insertion Sort is best with pre-ordered lists 

//#6 - Temperature Records for the past 50 years in Canada
radix or counting Sort 
Quick sort if decimal places
//Because: Its a small range of integers. 
//Because: If theres decimals I would switch to Quick sort and save on the space.

//#7 - Large user name database needs to be sorted. Data is very random.
Merge sort
Quick sort
//Because: If Im not to worried about space complexity
//Because: If Im not to worried about worst case

//#8 - You want to teach sorting
Bubble sort
Selection sort
//Because: They are easy to follow and understand