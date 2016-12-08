/**
 * Gambition Inc.
 * All Right Reserved.
 */
package tiger.web.api.controller.materials;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import tiger.biz.materials.support.MaterialsManager;
import tiger.core.basic.BaseResult;
import tiger.core.basic.PageResult;
import tiger.core.domain.materials.MaterialsDomain;
import tiger.web.api.constants.APIConstants;
import tiger.web.api.controller.BaseController;
import tiger.web.api.form.materials.MaterialsAddForm;
import tiger.web.api.form.materials.MaterialsUpdateForm;

import javax.validation.Valid;
import java.util.List;

/**
 * @Author: [mondooo.cgq]
 * @version: [V 0.1.1]
 * @CreateDate: [2016/12/8 07:08]
 */
@RestController
@ResponseBody
@RequestMapping(APIConstants.BASE_API_URL + "/materials")
public class MaterialsController extends BaseController{

    @Autowired
    MaterialsManager materialsManager;

    /**
     * 获取所有的物料信息
     *
     * @return
     */
    @RequestMapping(value = "/all", method = RequestMethod.GET)
    @ResponseBody
    public PageResult<List<MaterialsDomain>> getAll() {

        return materialsManager.getAll();
    }

    /**
     * 新增一条物料信息
     *
     * @param materialsAddForm
     * @param bindingResult
     * @return
     */
    @RequestMapping(value = "", method = RequestMethod.POST)
    @ResponseBody
    public BaseResult<Boolean> insertMaterials(@RequestBody @Valid MaterialsAddForm materialsAddForm,
                                                       BindingResult bindingResult) {

        MaterialsDomain materialsDomain = materialsAddForm.convert2Domain();
        return new BaseResult<>(materialsManager.insert(materialsDomain));
    }

    /**
     * 更新一条物料信息
     *
     * @param materialsUpdateForm
     * @param bindingResult
     * @return
     */
    @RequestMapping(value = "", method = RequestMethod.PUT)
    @ResponseBody
    public BaseResult<Boolean> updateMaterials(@RequestBody @Valid MaterialsUpdateForm materialsUpdateForm,
                                               BindingResult bindingResult) {

        MaterialsDomain materialsDomain = materialsUpdateForm.convert2Domain();
        return new BaseResult<>(materialsManager.update(materialsDomain));
    }
}
