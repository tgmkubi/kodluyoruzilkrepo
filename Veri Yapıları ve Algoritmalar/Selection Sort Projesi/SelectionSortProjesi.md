# Problem 1 

[22,27,16,2,18,6] -> Insertion Sort
Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.

# Çözüm 1

1. Adım: [**22**, 27, 16, 2, 18, 6] (Başlangıçta ilk eleman zaten sıralı bölgededir.)
2. Adım: [**22**, **27**, 16, 2, 18, 6] (27, sıralı bölgeye eklenir.)
3. Adım: [**16**, **22**, **27**, 2, 18, 6] (16, sıralı bölgeye eklenir.)
4. Adım: [**2**, **16**, **22**, **27**, 18, 6] (2, sıralı bölgeye eklenir.)
5. Adım: [**2**, **16**, **18**, **22**, **27**, 6] (18, sıralı bölgeye eklenir.)
6. Adım: [**2**, **6**, **16**, **18**, **22**, **27**] (6, sıralı bölgeye eklenir, dizi sıralanmıştır.)

# Problem 2

Big-O gösterimini yazınız.

# Çözüm 2

O(n^2)

# Problem 3

Time Complexity: Dizi sıralandıktan sonra 18 sayısı aşağıdaki case'lerden hangisinin kapsamına girer? Yazınız

# Çözüm 3

Average case: Aradığımız sayının ortada olması

# Problem 4

[7,3,5,8,2,9,4,15,6] dizisinin Selection Sort'a göre ilk 4 adımını yazınız.

# Çözüm 4

1. Adım: [**2**, 3, 5, 8, 7, 9, 4, 15, 6] (En küçük eleman 2 seçilir ve ilk sıraya yerleştirilir.)
2. Adım: [2, **3**, 5, 8, 7, 9, 4, 15, 6] (Sonraki en küçük eleman 3 seçilir ve ikinci sıraya yerleştirilir.)
3. Adım: [2, 3, **4**, 8, 7, 9, 5, 15, 6] (Daha küçük bir eleman bulunduğu için 4, sıralı bölgeye yerleştirilir.)
4. Adım: [2, 3, 4, **5**, 7, 9, 8, 15, 6] (Daha küçük bir eleman bulunduğu için 5, sıralı bölgeye yerleştirilir.)