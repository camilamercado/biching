var earthlyBranches = [

	 		{ 
	 			'branch' : 'zi',
	 			'number' : 1,  
	 			'year' : 2020,  
	 			'hour1' : 23,
	 			'hour2' : 0,   
	 			'animal' : "rat"
	 			     
	 			
	 		}, //11pm & 12am
	

			{ 
				'branch' : 'chou',
				'number' : 2,  
				'year' : 2021,  
				'hour1' : 01,
				'hour2' : 02, 
				'animal' : "ox"        
				
			},     //1am & 2am
			

			{   
				'branch' : 'yin',
				'number' : 3,         
				'year' : 2022,  
				'hour1' : 03,
				'hour2' : 04, 
				'animal' : "tiger"
			
			},     //3am & 4am
			

			{ 	
				'branch' : 'mao',
				'number' : 4,  
				'year' : 2023,  
				'hour1' : 05,
				'hour2' : 06,   
				'animal' : "rabbit"   
				 
			},     //5am & 6am
			

			{ 	
				'branch' : 'chen',
				'number' : 5,  
				'year' : 2024,  
				'hour1' : 07,
				'hour2' : 08,   
				'animal' : "dragon",   
				

			},     //7am & 8am
			

			{ 	
				'branch' : 'si',
				'number' : 6,  
				'year' : 2013,  
				'hour1' : 09,
				'hour2' : 10,     
				'animal' : "snake"    
				
			
			},     //9am & 10am
			
			
			{   
				'branch' : 'wu',
				'number' : 7,  
				'year' : 2014,  
				'hour1' : 1100,
				'hour2' : 1200, 
				'animal' : "horse"   
				 
			},     //11am & 12pm
			


			{ 	
				'branch' : 'wei',
				'number' : 8,  
				'year' : 2015,  
				'hour1' : 13,
				'hour2' : 14,   
				'animal' : "goat"   	 

			},     //1pm & 2pm


			{ 	
				'branch' : 'shen',
				'number' : 9,    
				'year' : 2016,  
				'hour1' : 15,
				'hour2' : 16, 
				'animal' : "monkey"
			
			},    //3pm & 4pm
			

			{ 	
				'branch' : 'you', 
				'number' : 10,
				'year' : 2017,  
				'hour1' : 17,
				'hour2' : 18,
				'animal' :  "rooster" 
				
			},     //5pm & 6pm
			

			{ 	
				'branch' : 'xu',
				'number' : 11, 
				'year' : 2018,  
				'hour1' : 19,
				'hour2' : 20,     
				'animal' :  "dog"   	

			},     //7pm & 8pm
			
			
			{ 	'branch' : 'hai',
				'number' : 12, 
				'year' : 2019,  
				'hour1' : 21,
				'hour2' : 22,   
				'animal' :  "pig"     
			},     //9pm & 10pm

];

var trigrams = [
	
			{	
				'number': 0,
				'wuName' : 'qian',
				'chingName' : 'chien',
				'image' : 'img/trigrams/0.png'
			},

			{	
				'number': 1,
				'wuName' : 'dui',
				'chingName' : 'tui'
			},

			{	
				'number': 2,
				'wuName' : 'li',
				'chingName' : 'li'
			},

			{	
				'number': 3,
				'wuName' : 'zhen',
				'chingName' : 'chen'
			},

			{	
				'number': 4,
				'wuName' : 'sun',
				'chingName' : 'sun'
			},

			{	
				'number': 5,
				'wuName' : 'kan',
				'chingName' : 'kan'
			},

			{	
				'number': 6,
				'wuName' : 'gen',
				'chingName' : 'ken'
			},

			{	
				'number': 7,
				'wuName' : 'kun',
				'chingName' : 'kun'
			},
];

var hexagrams = [

			{
				'number' : 1,
				'name' : 'chien',
				'upperTrigram ' : 'chien',
				'baseTrigram' : 'chien',
				'trait' : 'creative',
				'property' : 'firm',
				'link' : 'divinations/1.html'

			},

			{
				'number' : 2,
				'name' : 'kun',
				'upperTrigram ' : 'kun',
				'baseTrigram' : 'kun',
				'trait' : 'receptive',
				'property' : 'yeilding'

			},

			{
				'number' : 3,
				'name' : 'chun',
				'upperTrigram ' : 'chien',
				'baseTrigram' : 'kan',
				'trait' : 'difficulty at the begginning',
				'property' : 'firm'
			},

			{
				'number' : 4,
				'name' : 'meng',
				'upperTrigram ' : 'chien',
				'baseTrigram' : 'kan',
				'trait' : ' youthfull folly',
				'property' : 'firm'
			},

			{
				'number' : 5,
				'name' : 'hsu',
				'upperTrigram ' : 'kan',
				'baseTrigram' : 'tui',
				'trait' : 'waiting',
				'property' : 'flux'
			},

			{
				'number' : 6,
				'name' : 'sung',
				'upperTrigram ' : 'chien',
				'baseTrigram' : 'kan',
				'trait' : 'conflict',
				'property' : 'firm'
			},

			{
				'number' : 7,
				'name' : 'shih',
				'upperTrigram ' : 'kun',
				'baseTrigram' : 'kan',
				'trait' : 'the army',
				'property' : 'flux'
			},

			{
				'number' : 8,
				'name' : 'pi',
				'upperTrigram ' : 'kan',
				'baseTrigram' : 'kun',
				'trait' : 'holding together',
				'property' : 'flux'
			},

			{
				'number' : 9,
				'name' : 'hsiao chu',
				'upperTrigram ' : 'sun',
				'baseTrigram' : 'chien',
				'trait' : 'the taming power of the small',
				'property' : 'flux'
			},

			{
				'number' : 10,
				'name' : 'lu',
				'upperTrigram ' : 'chien',
				'baseTrigram' : 'tui',
				'trait' : 'treading',
				'property' : 'flux'
			},

			{
				'number' : 11,
				'name' : 'tai',
				'upperTrigram ' : 'kun',
				'baseTrigram' : 'chien',
				'trait' : 'peace',
				'property' : 'flux'
			},

			{
				'number' : 12,
				'name' : 'pi',
				'upperTrigram ' : 'chien',
				'baseTrigram' : 'kun',
				'trait' : 'standstill',
				'property' : 'flux'
			},

			{
				'number' : 13,
				'name' : 'tung jen',
				'upperTrigram ' : 'chien',
				'baseTrigram' : 'li',
				'trait' : 'fellowship with men',
				'property' : 'flux'
			},

			{
				'number' : 14,
				'name' : 'ta yu',
				'upperTrigram ' : 'li',
				'baseTrigram' : 'chien',
				'trait' : 'posession in great measure',
				'property' : 'flux'
			},

			{
				'number' : 15,
				'name' : 'chien',
				'upperTrigram ' : 'kun',
				'baseTrigram' : 'ken',
				'trait' : 'modesty',
				'property' : 'flux'
			},

			{
				'number' : 16,
				'name' : 'yu',
				'upperTrigram ' : 'chen',
				'baseTrigram' : 'kun',
				'trait' : 'enthusiasm',
				'property' : 'flux'
			},

			{
				'number' : 17,
				'name' : 'sui',
				'upperTrigram ' : 'tui',
				'baseTrigram' : 'chen',
				'trait' : 'following',
				'property' : 'flux'
			},

			{
				'number' : 18,
				'name' : 'ku',
				'upperTrigram ' : 'ken',
				'baseTrigram' : 'sun',
				'trait' : 'work on what has been spoiled',
				'property' : 'flux'
			},

			{
				'number' : 19,
				'name' : 'lin',
				'upperTrigram ' : 'kun',
				'baseTrigram' : 'tui',
				'trait' : 'yeilding',
				'property' : 'flux'
			},

			{
				'number' : 20,
				'name' : 'kuan',
				'upperTrigram ' : 'sun',
				'baseTrigram' : 'kun',
				'trait' : 'contemplation',
				'property' : 'yeilding'
			},

			{
				'number' : 21,
				'name' : 'shih ho',
				'upperTrigram ' : 'li',
				'baseTrigram' : 'chen',
				'trait' : 'biting through',
				'property' : 'flux'
			},

			{
				'number' : 22,
				'name' : 'pi',
				'upperTrigram ' : 'ken',
				'baseTrigram' : 'li',
				'trait' : 'grace',
				'property' : 'flux'
			},

			{
				'number' : 23,
				'name' : 'po',
				'upperTrigram ' : 'ken',
				'baseTrigram' : 'kun',
				'trait' : 'splitting apart',
				'property' : 'flux'
			},

			{
				'number' : 24,
				'name' : 'fu',
				'upperTrigram ' : 'kun',
				'baseTrigram' : 'chien',
				'trait' : 'return',
				'property' : 'flux'
			},

			{
				'number' : 25,
				'name' : 'wu wang',
				'upperTrigram ' : 'chien',
				'baseTrigram' : 'chen',
				'trait' : 'innocence',
				'property' : 'firm'
			},

			{
				'number' : 26,
				'name' : 'ta chu',
				'upperTrigram ' : 'ken',
				'baseTrigram' : 'chien',
				'trait' : 'the taming power of the great',
				'property' : 'firm'
			},

			{
				'number' : 27,
				'name' : 'i',
				'upperTrigram ' : 'ken',
				'baseTrigram' : 'chen',
				'trait' : 'the corners of the mouth',
				'property' : 'firm'
			},

			{
				'number' : 28,
				'name' : 'ta kuo',
				'upperTrigram ' : 'tui',
				'baseTrigram' : 'sun',
				'trait' : 'preponderance of the great',
				'property' : 'yeilding'
			},

			{
				'number' : 29,
				'name' : 'kan',
				'upperTrigram ' : 'kan',
				'baseTrigram' : 'kan',
				'trait' : 'the abysmal',
				'property' : 'firm'
			},

			{
				'number' : 30,
				'name' : 'li',
				'upperTrigram ' : 'li',
				'baseTrigram' : 'li',
				'trait' : 'the clinging',
				'property' : 'yeilding'
			},

			{
				'number' : 31,
				'name' : 'hsien',
				'upperTrigram ' : 'tui',
				'baseTrigram' : 'ken',
				'trait' : 'influence',
				'property' : 'flux'
			},

			{
				'number' : 32,
				'name' : 'heng',
				'upperTrigram ' : 'chen',
				'baseTrigram' : 'sun',
				'trait' : 'duration',
				'property' : 'flux'
			},

			{
				'number' : 33,
				'name' : 'tun',
				'upperTrigram ' : 'chien',
				'baseTrigram' : 'ken',
				'trait' : 'retreat',
				'property' : 'firm'
			},

			{
				'number' : 34,
				'name' : 'ta chuang',
				'upperTrigram ' : 'chen',
				'baseTrigram' : 'chien',
				'trait' : 'the power of the great',
				'property' : 'firm'
			},

			{
				'number' : 35,
				'name' : 'chin',
				'upperTrigram ' : 'li',
				'baseTrigram' : 'kun',
				'trait' : 'progress',
				'property' : 'yeilding'
			},

			{
				'number' : 36,
				'name' : 'ming i',
				'upperTrigram ' : 'kun',
				'baseTrigram' : 'li',
				'trait' : 'darkening of the light',
				'property' : 'yeilding'
			},

			{
				'number' : 37,
				'name' : 'chia jen',
				'upperTrigram ' : 'sun',
				'baseTrigram' : 'li',
				'trait' : 'the family',
				'property' : 'yeilding'
			},

			{
				'number' : 38,
				'name' : 'kuei',
				'upperTrigram ' : 'li',
				'baseTrigram' : 'tui',
				'trait' : 'opposition',
				'property' : 'yeilding'
			},

			{
				'number' : 39,
				'name' : 'chien',
				'upperTrigram ' : 'kan',
				'baseTrigram' : 'ken',
				'trait' : 'obstruction',
				'property' : 'firm'
			},

			{
				'number' : 40,
				'name' : 'hsieh',
				'upperTrigram ' : 'chen',
				'baseTrigram' : 'kan',
				'trait' : 'deliverance',
				'property' : 'firm'
			},

			{
				'number' : 41,
				'name' : 'sun',
				'upperTrigram ' : 'ken',
				'baseTrigram' : 'tui',
				'trait' : 'decrease',
				'property' : 'flux'
			},

			{
				'number' : 42,
				'name' : 'i',
				'upperTrigram ' : 'sun',
				'baseTrigram' : 'chen',
				'trait' : 'increase',
				'property' : 'flux'
			},

			{
				'number' : 43,
				'name' : 'kuai',
				'upperTrigram ' : 'tui',
				'baseTrigram' : 'chien',
				'trait' : 'breakthrough',
				'property' : 'flux'
			},

			{
				'number' : 44,
				'name' : 'kou',
				'upperTrigram ' : 'chien',
				'baseTrigram' : 'sun',
				'trait' : 'coming to meet',
				'property' : 'flux'
			},

			{
				'number' : 45,
				'name' : 'tsui',
				'upperTrigram ' : 'tui',
				'baseTrigram' : 'kun',
				'trait' : 'gathering together',
				'property' : 'yeilding'
			},

			{
				'number' : 46,
				'name' : 'sheng',
				'upperTrigram ' : 'kun',
				'baseTrigram' : 'sun',
				'trait' : 'pushing upward',
				'property' : 'yeilding'
			},

			{
				'number' : 47,
				'name' : 'kun',
				'upperTrigram ' : 'tui',
				'baseTrigram' : 'kan',
				'trait' : 'oppression',
				'property' : 'flux'
			},

			{
				'number' : 48,
				'name' : 'ching',
				'upperTrigram ' : 'kan',
				'baseTrigram' : 'sun',
				'trait' : 'the well',
				'property' : 'flux'
			},

			{
				'number' : 49,
				'name' : 'ko',
				'upperTrigram ' : 'tui',
				'baseTrigram' : 'li',
				'trait' : 'revolution',
				'property' : 'yeilding'
			},

			{
				'number' : 50,
				'name' : 'ting',
				'upperTrigram ' : 'li',
				'baseTrigram' : 'sun',
				'trait' : 'the caldron',
				'property' : 'yeilding'
			},

			{
				'number' : 51,
				'name' : 'chen',
				'upperTrigram ' : 'chen',
				'baseTrigram' : 'chen',
				'trait' : 'the arousing',
				'property' : 'firm'
			},

			{
				'number' : 52,
				'name' : 'ken',
				'upperTrigram ' : 'ken',
				'baseTrigram' : 'ken',
				'trait' : 'keeping still',
				'property' : 'firm'
			},

			{
				'number' : 53,
				'name' : 'chien',
				'upperTrigram ' : 'sun',
				'baseTrigram' : 'ken',
				'trait' : 'development',
				'property' : 'flux'
			},

			{
				'number' : 54,
				'name' : 'kuei mei',
				'upperTrigram ' : 'chen',
				'baseTrigram' : 'tui',
				'trait' : 'the marrying maiden',
				'property' : 'flux'
			},

			{
				'number' : 55,
				'name' : 'feng',
				'upperTrigram ' : 'chen',
				'baseTrigram' : 'li',
				'trait' : 'abundance',
				'property' : 'flux'
			},

			{
				'number' : 56,
				'name' : 'lu',
				'upperTrigram ' : 'li',
				'baseTrigram' : 'ken',
				'trait' : 'the wanderer',
				'property' : 'flux'
			},

			{
				'number' : 57,
				'name' : 'sun',
				'upperTrigram ' : 'sun',
				'baseTrigram' : 'sun',
				'trait' : 'the gentle',
				'property' : 'yeilding'
			},

			{
				'number' : 58,
				'name' : 'tui',
				'upperTrigram ' : 'tui',
				'baseTrigram' : 'tui',
				'trait' : 'the joyous',
				'property' : 'yeilding'
			},

			{
				'number' : 59,
				'name' : 'huan',
				'upperTrigram ' : 'sun',
				'baseTrigram' : 'kan',
				'trait' : 'dispersion',
				'property' : 'flux'
			},

			{
				'number' : 60,
				'name' : 'chieh',
				'upperTrigram ' : 'kan',
				'baseTrigram' : 'tui',
				'trait' : 'limitation',
				'property' : 'flux'
			},

			{
				'number' : 61,
				'name' : 'chung fu',
				'upperTrigram ' : 'sun',
				'baseTrigram' : 'tui',
				'trait' : 'inner truth',
				'property' : 'yeilding'
			},

			{
				'number' : 62,
				'name' : 'hsiao kou',
				'upperTrigram ' : 'chen',
				'baseTrigram' : 'ken',
				'trait' : 'preponderance of the small',
				'property' : 'firm'
			},

			{
				'number' : 63,
				'name' : 'chi chi',
				'upperTrigram ' : 'kan',
				'baseTrigram' : 'li',
				'trait' : 'after completion',
				'property' : 'flux'
			},

			{
				'number' : 64,
				'name' : 'wei chi',
				'upperTrigram ' : 'li',
				'baseTrigram' : 'kan',
				'trait' : 'before completion',
				'property' : 'flux'
			},






]