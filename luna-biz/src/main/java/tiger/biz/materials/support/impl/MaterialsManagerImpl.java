/**
 * Gambition Inc.
 * All Right Reserved.
 */
package tiger.biz.materials.support.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tiger.biz.materials.support.MaterialsManager;
import tiger.common.dal.persistence.materials.Materials;
import tiger.core.basic.PageResult;
import tiger.core.domain.materials.MaterialsDomain;
import tiger.core.domain.materials.convert.MaterialsConvert;
import tiger.core.service.materials.MaterialsService;

import java.util.List;

/**
 * @Author: [mondooo.cgq]
 * @version: [V 0.1.1]
 * @CreateDate: [2016/12/8 07:06]
 */
@Service
public class MaterialsManagerImpl implements MaterialsManager {

    @Autowired
    MaterialsService materialsService;

    @Override
    public PageResult<List<MaterialsDomain>> getAll() {

        return new PageResult<>(materialsService.getAll());
    }

    @Override
    public Boolean insert(MaterialsDomain materialsDomain) {
        if (materialsDomain == null) {
            return false;
        }

        return materialsService.insert(MaterialsConvert.convert2DO(materialsDomain));
    }

    @Override
    public Boolean update(MaterialsDomain materialsDomain) {
        if (materialsDomain == null) {
            return false;
        }

        return materialsService.update(MaterialsConvert.convert2DO(materialsDomain));
    }
}
