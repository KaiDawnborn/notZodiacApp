// Store personality types.
var pArray = [
{
	type: "ISTJ",
	title: "The Inspector",
	qual1: "Physically and mentally organized.",
	qual2: "Excellent planning skills and highly intellectual.",
	qual3: "Calm and clear-headed during tense situations.",
	qual4: "Serious and committed in relationships.",
	qual5: "Believes in traditions and strives to follow them.",
	qual6: "Well-respected in the community.",
	qual7: "Love to memorize details and facts.",
	sum: "At first glance, ISTJs are intimidating. They appear serious, formal, and proper. They also love traditions and old-school values that uphold patience, hard work, honor, and social and cultural responsibility. They are reserved, calm, quiet, and upright. These traits result from the combination of I, S, T, and J, a personality type that is often misunderstood."
},
{
	type: "INFJ",
	title: "The Counselor",
	qual1: "Passionate about ideas and dreams.",
	qual2: "Warm, caring, and approachable.",
	qual3: "Tactful, helpful, sensitive, and cautious.",
	qual4: "Can read and understand other people.",
	qual5: "Trusts gut feelings.",
	qual6: "Likes organizing and creating systems.",
	qual7: "Are visionaries who always try to make some sense of life.",
	sum: "INFJs are visionaries and idealists who ooze creative imagination and brilliant ideas. They have a different, and usually more profound, way of looking at the world. They have a substance and depth in the way they think, never taking anything at surface level or accepting things the way they are. Others may sometimes perceive them as weird or amusing because of their different outlook on life."
},
{
	type: "INTJ",
	title: "The Mastermind",
	qual1: "Able to absorb extremely complex theoretical material.",
	qual2: "Supreme strategists who are logical, rational, and future-oriented.",
	qual3: "Strong insights and intuitions, can easily see the big picture.",
	qual4: "Extremely logical and values knowledge and efficiency.",
	qual5: "Very high standards for performance, which they apply to themselves most strongly.",
	qual6: "Reserved and detached from others, but values close friendships.",
	qual7: "Bored with mundane routine tasks, small talk, and surface-level thinking.",
	sum: "INTJs, as introverts, are quiet, reserved, and comfortable being alone. They are usually self-sufficient and would rather work alone than in a group. Socializing drains an introvert’s energy, causing them to need to recharge. INTJs are interested in ideas and theories. When observing the world they are always questioning why things happen the way they do. They excel at developing plans and strategies, and don’t like uncertainty."
},
{
	type: "ENFJ",
	title: "The Giver",
	qual1: "Influential, loyal, reliable, and genuinely kind.",
	qual2: "Passionate and firm in ideals and principals.",
	qual3: "Highly intuitive and reflective.",
	qual4: "Warm, caring, generous, and people-focused.",
	qual5: "Extremely organized with difficulty dealing with uncertainties.",
	qual6: "Good communicator.",
	qual7: "Open-minded and highly accepting of others.",
	sum: "ENFJs are people-focused individuals. They are extroverted, idealistic, charismatic, outspoken, highly principled and ethical, and usually know how to connect with others no matter their background or personality. Mainly relying on intuition and feelings, they tend to live in their imagination rather than in the real world. Instead of focusing on living in the \“now\” and what is currently happening, ENFJs tend to concentrate on the abstract and what could possibly happen in the future."
},
{
	type: "ISTP",
	title: "The Craftsman",
	qual1: "Constantly gathers facts about the environment and stores them away for later.",
	qual2: "A risk taker who loves variety and new experiences.",
	qual3: "Highly practical, realistic, and results-oriented.",
	qual4: "Excellent trouble-shooters who are easily able to find solutions to practical problems.",
	qual5: "Usually laid back and easygoing with people.",
	qual6: "Independent and determined.",
	qual7: "Focused on living in the present, rather than the future.",
	sum: "ISTPs are mysterious people who are usually very rational and logical, but also quite spontaneous and enthusiastic. Their personality traits are less easily recognizable than those of other types, and even people who know them well can’t always anticipate their reactions. Deep down, ISTPs are spontaneous, unpredictable individuals, but they hide those traits from the outside world, often very successfully."
},
{
	type: "ESFJ",
	title: "The Provider",
	qual1: "True extrovert and social butterfly.",
	qual2: "Sensitive, energetic, helpful, and sociable.",
	qual3: "Popular and well-liked.",
	qual4: "Compassionate and empathetic.",
	qual5: "Extremely organized with difficulty dealing with uncertainties.",
	qual6: "Always ready to listen with warmth and genuine sensitivity.",
	qual7: "Prefers to live in the real world rather than in own imagination.",
	sum: "ESFJs are the stereotypical extroverts. They are social butterflies, and their need to interact with others and make people happy usually ends up making them popular. The ESFJ usually tends to be the cheerleader or sports hero in high school and college. Later on in life, they continue to revel in the spotlight, and are primarily focused on organizing social events for their families, friends and communities. ESFJ is a common personality type and one that is liked by many people."
},
{
	type: "INFP",
	title: "The Idealist",
	qual1: "Loves life and all the good that comes with it.",
	qual2: "Spontaneous and quick to adapt, but hard on themselves over perceived failures.",
	qual3: "Loves to be around people; naturally warm and compassionate.",
	qual4: "Highly intuitive and perceptive; good at making people feel comfortable.",
	qual5: "Strives to make the world a better place.",
	qual6: "Avoids hurting people's feelings but can sometimes be too controlling.",
	qual7: "Are good mediators and avoid conflicts.",
	sum: "INFPs, like most introverts, are quiet and reserved. They prefer not to talk about themselves, especially in the first encounter with a new person. They like spending time alone in quiet places where they can make sense of what is happening around them. They love analyzing signs and symbols, and consider them to be metaphors that have deeper meanings related to life. They are lost in their imagination and daydreams, always drowned in the depth of their thoughts, fantasies, and ideas."
},
{
	type: "ESFP",
	title: "The Performer",
	qual1: "Strong interpersonal skills and enjoys being the center of attention.",
	qual2: "Warm, generous, sympathetic, and concerned for others.",
	qual3: "Lives in the here-and-now and loves excitement.",
	qual4: "Natural ability to understand the facts and realities of the world.",
	qual5: "Talent for entertaining those around them.",
	qual6: "Practical aptitude for common sense.",
	qual7: "Has a detailed approach to life and appreciation for the world around them.",
	sum: "ESFPs have an Extraverted, Observant, Feeling and Perceiving personality, and are commonly seen as Entertainers. Born to be in front of others and to capture the stage, ESFPs love the spotlight. ESFPs are thoughtful explorers who love learning and sharing what they learn with others. ESFPs are “people people” with strong interpersonal skills. They are lively and fun, and enjoy being the center of attention. They are warm, generous, and friendly, sympathetic and concerned for other people’s well-being."
},
{
	type: "ENFP",
	title: "The Champion",
	qual1: "Warm and genuinely interested in people.",
	qual2: "Enjoys being around people.",
	qual3: "Able to relate with others and feel and think as they do.",
	qual4: "Dislikes performing boring, mundane, or routine tasks.",
	qual5: "Resists being controlled and directed by others.",
	qual6: "Usually able to grasp difficult concepts and theories with ease.",
	qual7: "Future-oriented and focused on long term goals over short term goals.",
	sum: "ENFPs have an Extraverted, Intuitive, Feeling and Perceiving personality. This personality type is highly individualistic and Champions strive toward creating their own methods, looks, actions, habits, and ideas — they do not like cookie cutter people and hate when they are forced to live inside a box. They like to be around other people and have a strong intuitive nature when it comes to themselves and others. They operate from their feelings most of the time, and they are highly perceptive and thoughtful."
},
{
	type: "ESTP",
	title: "The Doer",
	qual1: "Strong flair for drama and style.",
	qual2: "Fast-moving and fast-talking with an appreciation for the finer things in life.",
	qual3: "Uncanny ability to perceive people's attitudes and motivations.",
	qual4: "Lives in the present moment and likes to see immediate results.",
	qual5: "Loves to have fun and be the center of attention.",
	qual6: "Attracted to adventure and risk.",
	qual7: "Excellent people skills.",
	sum: "ESTPs have an Extraverted, Sensing, Thinking, and Perceptive personality. ESTPs are governed by the need for social interaction, feelings and emotions, logical processes and reasoning, along with a need for freedom. Theory and abstracts don’t keep ESTP’s interested for long. ESTPs leap before they look, fixing their mistakes as they go, rather than sitting idle or preparing contingency plans."
},
{
	type: "ESTJ",
	title: "The Supervisor",
	qual1: "Dignified, strong-willed, and principled.",
	qual2: "Extremely loyal to the group, whether it be family, community, or country.",
	qual3: "Great strategist and outstanding \"game\" player.",
	qual4: "Highly ethical, hardworking, dedicated, and honest.",
	qual5: "Focuses on what is practical, preferring tradition and order.",
	qual6: "Extremely organized and has difficulty dealing with uncertainties.",
	qual7: "Responsible and would rather plan and strategize before acting.",
	sum: "ESTJs are organized, honest, dedicated, dignified, traditional, and are great believers of doing what they believe is right and socially acceptable. Though the paths towards “good” and “right” are difficult, they are glad to take their place as the leaders of the pack. They are the epitome of good citizenry. People look to ESTJs for guidance and counsel, and ESTJs are always happy that they are approached for help."
},
{
	type: "ENTJ",
	title: "The Commander",
	qual1: "Natural born leader and likes being in charge.",
	qual2: "Lives in a world of possibilities.",
	qual3: "Project-oriented and focused on the task at hand.",
	qual4: "Logical and thoughtful before taking action.",
	qual5: "Can be a bit of a perfectionist.",
	qual6: "Well-developed communication skills.",
	qual7: "Self-confident and sure of themselves and their abilities.",
	sum: "An ENTJ’s primary mode of living focuses on external aspects and all things are dealt with rationally and logically. Their secondary mode of operation is internal, where intuition and reasoning take effect. ENTJs are natural born leaders among the 16 personality types and like being in charge. They live in a world of possibilities and they often see challenges and obstacles as great opportunities to push themselves. They seem to have a natural gift for leadership, making decisions, and considering options and ideas quickly yet carefully. They are “take charge” people who do not like to sit still."
},
{
	type: "INTP",
	title: "The Thinker",
	qual1: "The most logical-minded of all the personality types.",
	qual2: "Usually very independent, unconventional, and original.",
	qual3: "Not likely to place much value on traditional goals such as popularity.",
	qual4: "Highly values intelligence and knowledge.",
	qual5: "Loves new ideas and is excited about theories.",
	qual6: "Not well-equipped to meet the emotional needs of others.",
	qual7: "Generally laid-back and easy-going.",
	sum: "INTPs are well known for their brilliant theories and unrelenting logic, which makes sense since they are arguably the most logical minded of all the personality types. They love patterns, have a keen eye for picking up on discrepancies, and a good ability to read people, making it a bad idea to lie to an INTP. People of this personality type aren’t interested in practical, day-to-day activities and maintenance, but when they find an environment where their creative genius and potential can be expressed, there is no limit to the time and energy INTPs will expend in developing an insightful and unbiased solution."
},
{
	type: "ISFJ",
	title: "The Nurturer",
	qual1: "Kind and considerate, and highly aware of people's feelings.",
	qual2: "Very dependable.",
	qual3: "Stable, practical, and down-to-earth.",
	qual4: "Dislikes theory and abstract thought.",
	qual5: "Enjoys creating structure and values security.",
	qual6: "Extremely uncomfortable with conflict and confrontation.",
	qual7: "Can be depended on to follow things through to completion.",
	sum: "ISFJs are philanthropists and they are always ready to give back and return generosity with even more generosity. The people and things they believe in will be upheld and supported with enthusiasm and unselfishness. ISFJs are warm and kind-hearted. They value harmony and cooperation, and are likely to be very sensitive to other people’s feelings. People value the ISFJ for their consideration and awareness, and their ability to bring out the best in others."
},
{
	type: "ENTP",
	title: "The Visionary",
	qual1: "Creative, smart, and charming.",
	qual2: "Values freedom.",
	qual3: "Likes to create ideas and theorize.",
	qual4: "Doesn't like to be controlled.",
	qual5: "Competent and highly knowledgeable",
	qual6: "Innovative and ingenious at problem-solving.",
	qual7: "Good social skills.",
	sum: "Those with the ENTP personality are some of the rarest in the world, which is completely understandable. Although they are extroverts, they don’t enjoy small talk and may not thrive in many social situations, especially those that involve people who are too different from the ENTP. ENTPs are intelligent and knowledgeable need to be constantly mentally stimulated. They have the ability to discuss theories and facts in extensive detail. They are logical, rational, and objective in their approach to information and arguments.",
	l1: "E",
	l2: "N",
	l3: "T",
	l4: "P"
},
{
	type: "ISFP",
	title: "The Composer",
	qual1: "Loves facts and figures, not theories and ideas.",
	qual2: "Dislikes uncertainties in life but can adapt well to change.",
	qual3: "Serious and disciplined on the inside, but appears highly spontaneous on the outside.",
	qual4: "Loves adventure, craves thrilling activities, and is free-spirited.",
	qual5: "Tactful and always considerate of how people feel.",
	qual6: "Dislikes restrictions.",
	qual7: "Would love to try new experiences and gets bored easily with routines.",
	sum: "ISFPs are introverts that do not seem like introverts. It is because even if they have difficulties connecting to other people at first, they become warm, approachable, and friendly eventually. They are fun to be with and very spontaneous, which makes them the perfect friend to tag along in whatever activity, regardless if planned or unplanned. ISFPs want to live their life to the fullest and embrace the present, so they make sure they are always out to explore new things and discover new experiences. It is in experience that they find wisdom, so they do see more value in meeting new people than other introverts.",
	l1: "I",
	l2: "S",
	l3: "F",
	l4: "P"
}
];

var letters = [
	{
		letter: "I",
		mean: "Introverted",
		sum: ""
	},
	{
		letter: "E",
		mean: "Extraverted",
		sum: ""
	},
	{
		letter: "S",
		mean: "Sensing",
		sum: ""
	},
	{
		letter: "N",
		mean: "Intuition",
		sum: ""
	},
	{
		letter: "T",
		mean: "Thinking",
		sum: ""
	},
	{
		letter: "F",
		mean: "Feeling",
		sum: ""
	},
	{
		letter: "J",
		mean: "Judging",
		sum: ""
	},
	{
		letter: "P",
		mean: "Perceiving",
		sum: ""
	}
];
// invoke function on 'enter'.
var btn = document.getElementById('p-type');
btn.addEventListener('keypress', function enterKey(e) {
	if(e.keyCode == 13) {
		getType();
	};
}, false);
// Store user input on button click.
function getType() {
	var pType = document.getElementById("p-type");
	console.log(pType.value);
// Display object properties based on user input.

	for (var i = 0; i < pArray.length; i++) {

		document.getElementById("populate").style.display = "block";
		
		if (pType.value.toUpperCase() === pArray[i].type) {

			document.getElementById("qList").style.display = "block";
			
			document.getElementById("letter-sum").style.display = "block";

			document.getElementById("type").textContent = pArray[i].type;

			document.getElementById("title").textContent = pArray[i].title;

			document.getElementById("q-header").textContent = "Qualities of the " + pArray[i].type;

			document.getElementById("q1").textContent = pArray[i].qual1;

			document.getElementById("q2").textContent = pArray[i].qual2;

			document.getElementById("q3").textContent = pArray[i].qual3;

			document.getElementById("q4").textContent = pArray[i].qual4;

			document.getElementById("q5").textContent = pArray[i].qual5;

			document.getElementById("q6").textContent = pArray[i].qual6;

			document.getElementById("q7").textContent = pArray[i].qual7;
			
			document.getElementById("sum-title").textContent = "Summary of the " + pArray[i].type;
			
			document.getElementById("sum").textContent = pArray[i].sum;
			
			return;
		} // end if
	}; // end for
	var sorry = "Sorry, \"" + pType.value + "\" does not exist here."
	document.getElementById("type").textContent = sorry;
	var clear = document.getElementsByClassName("clear");
	for(i = 0; i < clear.length; i++) {
		clear[i].style.display = "none";
	}
}; // end function

// if true, populate fields. If false, clear fields. 

