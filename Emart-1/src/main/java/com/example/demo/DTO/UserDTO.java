
package com.example.demo.DTO;

import lombok.Data;

@Data
public class UserDTO {
	private int userid;
   
	private String username;
    private String useremail;
    private String password;
    private byte usertype;
    
    public int getUserid() {
		return userid;
	}
	public void setUserid(int userid) {
		this.userid = userid;
	}
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getUserEmail() {
		return useremail;
	}
	public void setUserEmail(String useremail) {
		this.useremail = useremail;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public byte getUserType() {
		return usertype;
	}
	public void setUserType(byte usertype) {
		this.usertype = usertype;
	}
    
}
