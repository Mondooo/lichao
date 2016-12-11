export default ($scope, $rootScope, qService, materialsRes, ToasterTool, resultsRes) => {
	'ngInject';

	const isNull = (value) => {
    	return typeof(value) == undefined || value == null;
    };

	$scope.getAll = () => {
		$rootScope.loading = true;
		qService.httpGetWithToken(materialsRes.materialsAll, {}, {}).then((data) => {
	        if (data.success) {
	        	ToasterTool.success("查找成功");
	            $scope.items = data.data;
	        } else {
	        	$scope.items = null;
	        }
	    }, (err) => {
	    	ToasterTool.error("网络错误");
	    	$scope.items = null;
	    }).finally(() => {
	        $rootScope.loading = false;
	    });
	};
	$scope.params = {};
	$scope.setCategory = (chName, enName) => {
		$scope.category = chName;
		$scope.params.column = enName;
	}
	$scope.setCategory('物料名称', 'name');

	$scope.getSome = () => {
		if (isNull($scope.params.value)) {
			ToasterTool.warning("输入不能为空");
			return;
		}
		$rootScope.loading = true;
		const params = {
			"column": $scope.params.column,
			"value": $scope.params.value,
		}
		qService.httpGetWithToken(materialsRes.materials, params, {}).then((data) => {
	        if (data.success) {
	            if (data.data == null) {
	            	ToasterTool.error("无结果");
	            	$scope.items = null;
	            } else {
	            	ToasterTool.success("查找成功");
	            	$scope.items = data.data;
	            }
	        } else {
	        	$scope.items = null;
	        }
	    }, (err) => {
	    	ToasterTool.error("网络错误");
	    	$scope.items = null;
	    }).finally(() => {
	        $rootScope.loading = false;
	    });
	}
	$scope.insert = () => {
		ToasterTool.info("暂未提供^^");
	}
	$scope.changeDiscount = (item) => {
		swal({
			title: "修改折扣",
			text: "输入新的折扣",
			type: "input",
			showCancelButton: true,
			closeOnConfirm: false,
			showLoaderOnConfirm: true,
			confirmButtonText: "确定",
			cancelButtonText: "取消",
			inputValue: item.discount,
			animation: "slide-from-top",
			inputPlaceholder: "输入小数, 例: 0.78"
		}, function(inputValue){
			if (inputValue === false) return false;
			if (inputValue === "") {
				swal.showInputError("输入不能为空");
				return false
			}
			if (isNaN(inputValue)) {
				swal.showInputError("请输入数字");
				return false
			}
			let item_back = item; // 留待还原item
			// 修改折扣价格
			item.discount = inputValue;
			item.discountprice = inputValue * item.marketprice;
			qService.httpPutWithToken(materialsRes.materials, {}, {}, item).then((data) => {
		        if (data.success) {
		       		swal("修改成功！");
		        } else {
		        	ToasterTool.error("未知服务器错误");
		        	item = item_back;
		        }
		    }, (err) => {
		    	ToasterTool.error("网络错误");
		    	item = item_back;
		    });
		});
	}
	$scope.changeName = (item) => {
		swal({
			title: "修改物料名称",
			text: "输入新的物料名称",
			type: "input",
			showCancelButton: true,
			closeOnConfirm: false,
			showLoaderOnConfirm: true,
			confirmButtonText: "确定",
			cancelButtonText: "取消",
			inputValue: item.name,
			animation: "slide-from-top",
			inputPlaceholder: "输入文字, 例: 名称"
		}, function(inputValue){
			if (inputValue === false) return false;
			if (inputValue === "") {
				swal.showInputError("输入不能为空");
				return false
			}
			let item_back = item; // 留待还原item
			item.name = inputValue;
			qService.httpPutWithToken(materialsRes.materials, {}, {}, item).then((data) => {
		        if (data.success) {
		       		swal("修改成功！");
		        } else {
		        	ToasterTool.error("未知服务器错误");
		        	item = item_back;
		        }
		    }, (err) => {
		    	ToasterTool.error("网络错误");
		    	item = item_back;
		    });
		});
	}
	$scope.changeRemarks = (item) => {
		swal({
			title: "修改物料备注",
			text: "输入新的备注",
			type: "input",
			showCancelButton: true,
			closeOnConfirm: false,
			showLoaderOnConfirm: true,
			confirmButtonText: "确定",
			cancelButtonText: "取消",
			inputValue: item.remarks,
			animation: "slide-from-top",
			inputPlaceholder: "输入文字, 例: 备注"
		}, function(inputValue){
			if (inputValue === false) return false;
			if (inputValue === "") {
				swal.showInputError("输入不能为空");
				return false
			}
			let item_back = item; // 留待还原item
			item.remarks = inputValue;
			qService.httpPutWithToken(materialsRes.materials, {}, {}, item).then((data) => {
		        if (data.success) {
		       		swal("修改成功！");
		        } else {
		        	ToasterTool.error("未知服务器错误");
		        	item = item_back;
		        }
		    }, (err) => {
		    	ToasterTool.error("网络错误");
		    	item = item_back;
		    });
		});
	}
	$scope.addToResult = (item) => {
		swal({
			title: "确定添加" + (item.name === null ? item.description:item.name) + "?",
			text: "输入添加数量:",
			type: "input",
			showCancelButton: true,
			closeOnConfirm: false,
			showLoaderOnConfirm: true,
			confirmButtonText: "确定",
			cancelButtonText: "取消",
			animation: "slide-from-top",
			inputPlaceholder: "输入整数, 例: 3"
		},function(inputValue){
			if (inputValue === false) return false;
			if (inputValue === "") {
				swal.showInputError("输入不能为空");
				return false
			}
			if (isNaN(inputValue)) {
				swal.showInputError("请输入数字");
				return false
			}
			const results = {
				mid: item.id,
				count: inputValue
			};
			qService.httpPostWithToken(resultsRes.results, {}, {}, results).then((data) => {
		        if (data.success) {
		       		swal("成功!", (item.name === null ? item.description:item.name) + "已添加到结果集!", "success");
		        } else {
		        	ToasterTool.error("未知服务器错误, 添加失败");
		        	item = item_back;
		        }
		    }, (err) => {
		    	ToasterTool.error("网络错误");
		    	item = item_back;
		    });
		});
	}
};