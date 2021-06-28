# TweetAnalyser Group PROJECT BY Atakan MAVZER and Umut ZEREN
Tweet sentiment analyser with machine learning.

Data analysis is still ongoing.
					




Impact of Social Media on the 
Cryptocurrency Market


Atakan MAVZER
Umut ZEREN











ABSTRACT

Cryptocurrency prices are observed to be changing after influential people on the social media making posts about it. The public believes that following social media may grant them to predict the prices. This research aims to find a correlation between the posts that influential people make on the social media and their impact on the cryptocurrency market prices.
Introduction
Social media was first established to connect with family and friends over the internet but after its increase in popularity, big corporations and bussinesses adopted this new way of communication. This created a new way of advertisement, which is sometimes using an already popular user, popular by having lots of followers, to influence the possible customers or bussiness management becoming a people PR person themselves and influencing the public by advertising themselves.
With the rise of the popularity of cryptocurrency market and social media, the effects of the influencers on the social media can be seen on the cryptocurrency market. Many new cryptocurrencies and their founders are actively promoting their own coins in Twitter. This promotion movement has led to many price changes in the cryptocurrency market as the promoters try to rally the public to their product or their investment. As of late 2020 both users of social media and investors of cryptocurrencies believe that social media has a huge impact on the price change of the coins both positively and negatively. Our goal is to find whether social media has impact on the market or not.

Literature Review

Similar Research on the Topic
Data science on the topics of social media and asset markets are popular with the ease to accessing big amount of data. To conduct our research we looked at the similar types of researchs for the impact of social media on the cryptocurrency market. Research made by GitHub user Drabble named TwitterSentimentAndCryptocurrencies (2018) using sentiment analysis and corporating likes and retweets reached a inconclusive correlation between the cryptocurrency market price change and tweets. Research uses tweet's score = (#like + #follower) * sentimentscore as its score model. Tweets are selected randomly and maksimum age of the tweet is seven day. Conclusion of this research is inconclusive but we can make insight out of it to shape our own model for better results.
Python and Pandas
Pandas library of Python used to handle the data we gathered. We used this library extensively to handle data operations such as mathematical operations and time and merger operations. The version of the Python is 3.6 written on Google Collab.

Model

Since our goal is to find correlation between social media’s, Twitter in our case, effect on tweets and price changes of the cryptocurrencies, our model has to include social media parameters. According to TwitterSentimentAndCryptocurrencies (2018) which selects tweets randomly, we targeted big media influencers and corporation founders such as ‘Elon Musk’. This selection will make our data more specialized since these people are very famous and public believes that they can effect the markets. 
Another characteristic of our model is, not including the sentiment analysis. The sentiment analysis can vary from model to model and we make few trial runs to see the effectiveness of the model ‘TextBlob’ in Twitter case. Trials were not convincing as the sentiment models cannot detect memes and result in a negative effect on our score system. Instead of sentiment analysis, our model has pre-selected words that are related to cryptocurrency terminology. If we found a match between tweet and our keywords we assign a score and if there is no match between, then we assign score ‘0’ to sort out the unrelated tweets.
Scoring of the tweets are the most important part in our model. Since we have math-keyword model, the score for each matched tweet is based on influence of each tweets. Influence calculation is done by normalizing of the retweets, comments, likes and followers. We found the highest and lowest numbers of each category and calculated the normalize formula to see and evaluate the interaction with the users of the social media each tweet gets.
Finally we only get the maximum results for each coin-personality pair. For example if ‘Elon Musk’ has higher results for ‘DogeCoin’ or ‘BTC’ we conclude that, influencer targets those coins, and other results are discarded.
Processing the Data
Gathering the Data
Twitter has an API that lets its users to requests 500 tweets per day. Unfortunately our access request to this API has failed. So we created a program called ‘Twitter Scraper’ to gather the tweets. Our scraper allows us to gather approximately 1000 tweets per query. Gathering of the tweets is sequential, so the oldest tweet varies per source. More tweets posted per day by the source results in a decrease in the age of the oldest tweet.
Tweets that are scraped contains the information of:
	Text data
	Time data
	Number of Comments the posted tweet gets
	Number of Likes the posted tweet gets
	Number of Retweets the posted tweet gets
Price data is gathered from www.cointelegraph.com. The site lets us download 3 years worth of data for each cryptocurrency that we used in our research.
Processing

The gathered tweets are processed to have their unneccesary symbols, whitespaces and new lines stripped to have a more compact data. The dates are then decoded and encoded to be readable by the dataframe of the Python Pandas library. The same process is also done to the price data for the selected influencer-cryptomarket pair.
Calculations
After making the data of the tweets and prices merge ready, score operation is conducted. Score is based on the formula below. We normalized the parameters to show their significance. All of the scores that exist in the same day are then summed and merged with the price data in a date-price-tweetscore manner.
if match:
Score=norm(n retweet)  *norm(n comment)*norm(n likes)*norm(n follower)
else:
          Score=0
Date-price(close)-tweetscore dataframe allows us to make correlation between our tweetscore and closing price of the selected cryptocurrency of that day. Correlation is calculated with Pearson Correlation formula.
Match for keywords: 

Results

Test Group No Relation With Cryptocurrency

Cryptocurrency Group




Conclusion
Our results show a definitive distinction between our test case of unrelated individuals and cryptocurrency influencers on the Twitter. Our research sucessfully shows that social media influencers can impact the markets with final correlations results such as 0.4 on the Elon Musk case. Finally, research clearly shows that popularity is an important parameter when calculating the influence of each individuals and sentiment may not be always necessary. 
Further Improvements
One of the most important shortcomings of our research was the frequency of the price data. Since we only take closing prices of respective cryptocurrencies, we are unable to detect the shocks that are created by these tweets. If we can get precise time data for tweets and prices, our accuracy of detecting price changes will increase since the closing price may be the stablized price after shock.

