package eLearning.sf.service;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import eLearning.sf.serviceInterface.IStorageService;

@Service
public class StorageServiceImpl implements IStorageService {

	private static final String UPLOAD_FOLDER_IMAGES = "src/main/resources/static/assets/img/";
	
	@Override
	public String store(MultipartFile multipartFile) {

        try {
            String fileName = String.valueOf(System.currentTimeMillis());
            File file = new File(UPLOAD_FOLDER_IMAGES + fileName + multipartFile.getOriginalFilename());
            FileOutputStream fileOutputStream = new FileOutputStream(file);
            fileOutputStream.write(multipartFile.getBytes());
            fileOutputStream.close();

            return file.getName();

        } catch (IOException e) {
        	return e.getMessage();
        }

    }
}
