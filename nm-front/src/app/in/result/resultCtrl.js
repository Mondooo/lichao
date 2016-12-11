export default ($scope, $rootScope, qService, resultsRes, ToasterTool) => {
	'ngInject';
	$rootScope.loading = true;
	qService.httpGet(resultsRes.resultsAll, {}, {}).then((data) => {
        if (data.success) {
        	ToasterTool.success("查找成功");
            $scope.items = data.data;
            let serialNo = 1;
            for(let key in $scope.items) {
                $scope.items[key].serialNo = serialNo;
                serialNo += 1;
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

    $scope.deleteFromResult = (item) => {
        swal({
            title: "确定?",
            text: "将从结果表中删除" + (item.name === null ? item.description:item.name) + "，不影响后台表",
            type: "warning",
            showCancelButton: true,
            closeOnConfirm: false,
            showLoaderOnConfirm: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            animation: "slide-from-top"
        },function(isConfirm){
            if (isConfirm) {
                const params = {
                    id: item.id
                };
                qService.httpDelete(resultsRes.results, params, {}, {}).then((data) => {
                    if (data.success) {
                        item.hidden = true;
                        $scope.calcuAll();
                        swal("成功!", (item.name === null ? item.description:item.name) + "已从结果集中删除!", "success");
                    } else {
                        ToasterTool.error("未知服务器错误, 删除失败");
                    }
                }, (err) => {
                    ToasterTool.error("网络错误");
                });
            }
        });
    }

    $scope.calcuAll = () => {
        $rootScope.loading = true;
        qService.httpGet(resultsRes.resultsAll, {}, {}).then((data) => {
            if (data.success) {
                const items = data.data;
                $scope.totalPrice = 0;
                for(let key in items) {
                    $scope.totalPrice += items[key].discountprice * items[key].count;
                }
            } else {
                $scope.totalPrice = 0;
            }
        }, (err) => {
            ToasterTool.error("网络错误");
            $scope.totalPrice = 0;
        }).finally(() => {
            $rootScope.loading = false;
        });
    }
    $scope.showTotalPrice = () => {
        $scope.isShowTotalPrice = true;
        $scope.calcuAll();
    }
}