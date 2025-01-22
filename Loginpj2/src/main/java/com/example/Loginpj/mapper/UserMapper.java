/*package com.example.Loginpj.mapper;

import com.example.Loginpj.model.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Insert;

@Mapper
public interface UserMapper {

    @Select("SELECT * FROM user_info WHERE id = #{id}")
    User findById(String id);

    @Insert("INSERT INTO user_info (id, passwd, email) VALUES (#{id}, #{passwd}, #{email})")
    void insertUser(User user);
}*/
package com.example.Loginpj.mapper;

import com.example.Loginpj.model.User;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper {
    User findById(String username);
    void insertUser(User user);
    
}
