/**
 * Gambition Inc.
 * All Right Reserved.
 */
package tiger.core.service.materials.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tiger.common.dal.persistence.mapper.MaterialsMapper;
import tiger.common.dal.persistence.materials.Materials;
import tiger.common.dal.persistence.materials.MaterialsExample;
import tiger.core.service.materials.MaterialsService;

import java.util.List;

/**
 * @Author: [mondooo.cgq]
 * @version: [V 0.1.1]
 * @CreateDate: [2016/12/8 06:59]
 */
@Service
public class MaterialsServiceImpl implements MaterialsService {

    @Autowired
    MaterialsMapper materialsMapper;

    @Override
    public List<Materials> getAll() {

        return materialsMapper.selectByExample(new MaterialsExample());
    }
}
