function SalaryCalculator(){
		var _basic = 0,
			_hra = 0,
			_da = 0,
			_tax = 0;
			_salary = 0,
			_onChangeSubscribers = {},
			self = this;

		this.addSubscriber = function(attrName,subscriptionFn){
			if (typeof _onChangeSubscribers[attrName] === "undefined")
				_onChangeSubscribers[attrName] = [];
			_onChangeSubscribers[attrName].push(subscriptionFn);
		};
		function triggerChange(attrName){
			if (typeof _onChangeSubscribers[attrName] !== "undefined")
				for(var i=0;i<_onChangeSubscribers[attrName].length;i++)
					setTimeout((function(index){
						_onChangeSubscribers[attrName][index]();	
					})(i));
					
		} 

		this.basic = function(){
			if (arguments.length === 0) return _basic;
			_basic = arguments[0];
			triggerChange('Basic');
		};
		this.hra = function(){
			if (arguments.length === 0) return _hra;
			_hra = arguments[0];
			triggerChange('Hra');
		};
		this.da = function(){
			if (arguments.length === 0) return _da;
			_da = arguments[0];
			triggerChange('Da');
		};
		this.tax = function(){
			if (arguments.length === 0) return _tax;
			_tax = arguments[0];
			triggerChange('Tax');
		};
		this.salary = function(){
			return _salary;
		}
		this.calculate = function(){
			var gross = this.basic() + this.hra() + this.da();
			_salary = gross * (100 - this.tax())/100;
			triggerChange('Salary');
		}
	}