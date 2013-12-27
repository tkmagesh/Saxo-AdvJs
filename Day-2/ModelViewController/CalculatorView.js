function CalculatorView(model,templateId){
	var calculator = model;
	this.$root = $("<div>");
	var self = this;
	this.render = function(){
		this.$root.append($(templateId).html());
		return this;
	}
	this.init = function(){
		self.$root.on("click","#btnCalculate",function(){
			calculator.calculate();
		});

		self.$root.on("change","#txtBasic",function(){
			calculator.basic(parseFloat(this.value,10));
		});
		self.$root.on("change","#txtHra",function(){
			calculator.hra(parseFloat(this.value,10));
		});
		self.$root.on("change","#txtDa",function(){
			calculator.da(parseFloat(this.value,10));
		});
		self.$root.on("change","#rangeTax",function(){
			calculator.tax(parseFloat(this.value,10));
		});

		calculator.addSubscriber("Basic",function(){
			self.$root.find("#txtBasic").val(calculator.basic());
		});

		calculator.addSubscriber("Hra",function(){
			self.$root.find("#txtHra").val(calculator.hra());
		});
		
		calculator.addSubscriber("Da",function(){
			self.$root.find("#txtDa").val(calculator.da());
		});
		
		calculator.addSubscriber("Tax",function(){
			self.$root.find("#rangeTax").val(calculator.tax());
			self.$root.find("#spanTax").text(calculator.tax() + "%");

		});
		

		calculator.addSubscriber('Salary',function(){
			self.$root.find("#divResult").text(calculator.salary());	
		});
	}
	
	
}
