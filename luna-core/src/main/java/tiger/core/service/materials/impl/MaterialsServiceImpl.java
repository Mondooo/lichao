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
import tiger.core.domain.materials.MaterialsDomain;
import tiger.core.domain.materials.convert.MaterialsConvert;
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
    public List<MaterialsDomain> getAll() {
        List<Materials> DOs = materialsMapper.selectByExample(new MaterialsExample());
        return MaterialsConvert.convert2Domains(DOs);
    }

    @Override
    public Boolean insert(Materials materials) {
        return materialsMapper.insert(materials) > 0;
    }

    @Override
    public Boolean update(Materials materials) {
        return materialsMapper.updateByPrimaryKey(materials) > 0;
    }

    @Override
    public List<MaterialsDomain> getSome(String column, String value) {
        MaterialsExample example = new MaterialsExample();
        switch (column) {
            case "code": example.createCriteria().andCodeEqualTo(value);break;
            case "name": example.createCriteria().andNameEqualTo(value);break;
            case "description": example.createCriteria().andDescriptionEqualTo(value);break;
            case "majorcategory": example.createCriteria().andMajorcategoryEqualTo(value);break;
            case "subcategory": example.createCriteria().andSubcategoryEqualTo(value);break;
            case "detailclass": example.createCriteria().andDetailclassEqualTo(value);break;
            case "productline": example.createCriteria().andProductlineEqualTo(value);break;
            case "marketprice":
                double mvalue = Double.parseDouble(value);
                example.createCriteria().andMarketpriceEqualTo(mvalue);
                break;
            case "discount":
                double dvalue = Double.parseDouble(value);
                example.createCriteria().andDiscountEqualTo(dvalue);
                break;

        }
        return MaterialsConvert.convert2Domains(materialsMapper.selectByExample(example));
    }

}
