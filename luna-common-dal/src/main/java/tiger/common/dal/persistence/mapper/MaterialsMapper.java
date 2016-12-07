package tiger.common.dal.persistence.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import tiger.common.dal.persistence.materials.Materials;
import tiger.common.dal.persistence.materials.MaterialsExample;

public interface MaterialsMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table materials
     *
     * @mbggenerated
     */
    int countByExample(MaterialsExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table materials
     *
     * @mbggenerated
     */
    int deleteByExample(MaterialsExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table materials
     *
     * @mbggenerated
     */
    int deleteByPrimaryKey(Long id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table materials
     *
     * @mbggenerated
     */
    int insert(Materials record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table materials
     *
     * @mbggenerated
     */
    int insertSelective(Materials record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table materials
     *
     * @mbggenerated
     */
    List<Materials> selectByExample(MaterialsExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table materials
     *
     * @mbggenerated
     */
    Materials selectByPrimaryKey(Long id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table materials
     *
     * @mbggenerated
     */
    int updateByExampleSelective(@Param("record") Materials record, @Param("example") MaterialsExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table materials
     *
     * @mbggenerated
     */
    int updateByExample(@Param("record") Materials record, @Param("example") MaterialsExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table materials
     *
     * @mbggenerated
     */
    int updateByPrimaryKeySelective(Materials record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table materials
     *
     * @mbggenerated
     */
    int updateByPrimaryKey(Materials record);
}