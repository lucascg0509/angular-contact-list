Contact List with AngularJS
==============================

I'm creating a webapp for save contacts in localStorage.

My purposes are:
*    The better interface
*    The better performance
*    The better user experience

But, at some time, I'm learning Angular. So I will need help by who can to teach.

If you speak portuguese, our comunication will be better. But I can understand some things in english.

Anyway, thank's for help and follow!

Rules to contribute
--------------------

### Rules of JS

*	Always use tab;
*	About the positioning and comments, see this:

	```javascript
	/*
	*	--------------------------
	*	MODULE 'NAME OF THE MODULE'
	*
	*	A short description of the module
	*	
	*/


	/*
	*	Function to 'action of function'
	*/
	$scope.nameFunction = function(){
		$scope.doAnything();
		. . .
	};
	```

### Rules of HTML

*	Always use tab;
*	About the positioning and comments, see this:
	
	```html
	<!-- Form to add or search a contact in/of list -->
	<form ng-submit="addContact()">
		<p class="controls form-inline">
			<input type="text" class="span4" ng-model="newContact.name" placeholder="Name">
			<button class="btn btn-primary" type="submit"><i class="icon-plus icon-white"></i></button>
		</p>
	</form>
	<!-- End Form -->
	

	<!-- List of contacts -->
	<ul class="list-contacts">
		. . .
	</ul>
	<!-- End List -->
	```

### Rules of HTML

*	Always use tab;
*	About the positioning and comments, see this:

	```css
	/*
	*   Fixing the bug in modal
	*/
	.modal.fade{
	    top: -50%;
	}
	```