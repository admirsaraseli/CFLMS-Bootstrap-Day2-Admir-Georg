$(document).ready(function() {

	//convert Json file from string to object
	var movies = JSON.parse(factory);	

	//add json data to html
	function addData(movies) {
		for (let i = 0; i < movies.length; i++){
			let movie = "";
			if (i === 0) {
				movie = 
					`<div class="tab-pane fade show active" id="v-pills-movie_${i+1}" role="tabpanel" aria-labelledby="v-pills-movie_${i+1}-tab">
						<div class="movie_box">
							<img src="${movies[i].image}">
							<div class="movie_data">
								<h1>${movies[i].title}</h1>
								<p>${movies[i].actors}</p>
								<p>${movies[i].distributed}</p>
								<p class="description">${movies[i].description}</p>
								<div class="likes" id="${i}">
									<a>
										<i class="fa fa-heart" ></i>
									</a>
									<p>Likes</p>
									<div id="counter" >${movies[i].likes}</div>
								</div>
							</div>
						</div>
					</div>`;
			} else {
				movie = 
					`<div class="tab-pane fade" id="v-pills-movie_${i+1}" role="tabpanel" aria-labelledby="v-pills-movie_${i+1}-tab">
						<div class="movie_box">
							<img src="${movies[i].image}">
							<div class="movie_data">
								<h1>${movies[i].title}</h1>
								<p>${movies[i].actors}</p>
								<p>${movies[i].distributed}</p>
								<p class="description">${movies[i].description}</p>
								<div class="likes" id="${i}">
									<a>
										<i class="fa fa-heart" ></i>
									</a>
									<p>Likes</p>
									<div id="counter" >${movies[i].likes}</div>
								</div>
							</div>
						</div>
					</div>`;
			}
			
			$("#v-pills-tabContent").append(movie);	
		};	
	}	

	//call the function 
	addData(movies); 

	//count likes function
	$("body").on("click",".likes", function() {
		
		let selector = $(this).find("#counter");

		x = Number(selector.html())+1;
		movies[this.id].likes = x;
		
		selector.html(x);
	});

});	

	

