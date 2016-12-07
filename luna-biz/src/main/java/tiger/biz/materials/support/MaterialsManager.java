/**
 * Gambition Inc.
 * All Right Reserved.
 */
package tiger.biz.materials.support;

import tiger.common.dal.persistence.materials.Materials;
import tiger.core.basic.PageResult;

import java.util.List;

/**
 * @Author: [mondooo.cgq]
 * @version: [V 0.1.1]
 * @CreateDate: [2016/12/8 07:05]
 */
public interface MaterialsManager {

    PageResult<List<Materials>> getAll();
}
