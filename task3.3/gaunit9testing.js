function addBonusPionts(score){
			if(score > 50) {
				return score + (score * .10);
				//ifscore is 55, then 60.6 will be returned   
			}
			return score; 
		}
		addBonusPionts(5);
