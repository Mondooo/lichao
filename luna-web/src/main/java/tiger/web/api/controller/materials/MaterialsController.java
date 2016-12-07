/**
 * Gambition Inc.
 * All Right Reserved.
 */
package tiger.web.api.controller.materials;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tiger.biz.materials.support.MaterialsManager;
import tiger.common.dal.persistence.materials.Materials;
import tiger.core.basic.PageResult;
import tiger.web.api.constants.APIConstants;
import tiger.web.api.controller.BaseController;

import java.util.List;

/**
 * @Author: [mondooo.cgq]
 * @version: [V 0.1.1]
 * @CreateDate: [2016/12/8 07:08]
 */
@RestController
@ResponseBody
@RequestMapping(APIConstants.BASE_API_URL + "/")
public class MaterialsController extends BaseController{

    @Autowired
    MaterialsManager materialsManager;

    @RequestMapping(value = "materials/all", method = RequestMethod.GET)
    @ResponseBody
    public PageResult<List<Materials>> getAll() {

        return materialsManager.getAll();
    }
}
