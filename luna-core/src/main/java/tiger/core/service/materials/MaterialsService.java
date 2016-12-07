/**
 * Gambition Inc.
 * All Right Reserved.
 */
package tiger.core.service.materials;

import tiger.common.dal.persistence.materials.Materials;

import java.util.List;

/**
 * @Author: [mondooo.cgq]
 * @version: [V 0.1.1]
 * @CreateDate: [2016/12/8 06:54]
 */
public interface MaterialsService  {

    /**
     * 获取所有的物料条目
     *
     * @return
     */
    List<Materials> getAll();


}
