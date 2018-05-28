package eLearning.sf.serviceInterface;

import org.springframework.web.multipart.MultipartFile;

public interface IStorageService {
	
	String store(MultipartFile multipartFile);
}
