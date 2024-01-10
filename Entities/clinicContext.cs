using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace SEPHMS.Entities
{
    public partial class clinicContext : DbContext
    {
        public clinicContext()
        {
        }

        public clinicContext(DbContextOptions<clinicContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Account> Accounts { get; set; }
        public virtual DbSet<Adminaccount> Adminaccounts { get; set; }
        public virtual DbSet<Appointment> Appointments { get; set; }
        public virtual DbSet<Category> Categories { get; set; }
        public virtual DbSet<Coursestrandyear> Coursestrandyears { get; set; }
        public virtual DbSet<Date> Dates { get; set; }
        public virtual DbSet<Department> Departments { get; set; }
        public virtual DbSet<Doctor> Doctors { get; set; }
        public virtual DbSet<Employeehealthinformation> Employeehealthinformations { get; set; }
        public virtual DbSet<Employeepersonalinformation> Employeepersonalinformations { get; set; }
        public virtual DbSet<Equipment> Equipment { get; set; }
        public virtual DbSet<Medicine> Medicines { get; set; }
        public virtual DbSet<Medicinestockhistory> Medicinestockhistories { get; set; }
        public virtual DbSet<Normalrange> Normalranges { get; set; }
        public virtual DbSet<Nurse> Nurses { get; set; }
        public virtual DbSet<Physician> Physicians { get; set; }
        public virtual DbSet<Signup> Signups { get; set; }
        public virtual DbSet<Studenthealthinformation> Studenthealthinformations { get; set; }
        public virtual DbSet<Studentpersonalinformation> Studentpersonalinformations { get; set; }
        public virtual DbSet<Time> Times { get; set; }
        public virtual DbSet<Unit> Units { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseMySql("server=localhost;database=clinic;user=root", Microsoft.EntityFrameworkCore.ServerVersion.Parse("10.4.27-mariadb"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.UseCollation("utf8mb4_general_ci")
                .HasCharSet("utf8mb4");

            modelBuilder.Entity<Account>(entity =>
            {
                entity.ToTable("account");

                entity.Property(e => e.AccountId)
                    .HasColumnType("int(11)")
                    .HasColumnName("accountId");

                entity.Property(e => e.Firstname)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("firstname");

                entity.Property(e => e.Fullname)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("fullname");

                entity.Property(e => e.Gmail)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("gmail");

                entity.Property(e => e.Lastname)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("lastname");

                entity.Property(e => e.Middlename)
                    .HasMaxLength(250)
                    .HasColumnName("middlename");

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("password");
            });

            modelBuilder.Entity<Adminaccount>(entity =>
            {
                entity.ToTable("adminaccount");

                entity.Property(e => e.Id)
                    .HasColumnType("int(11)")
                    .HasColumnName("id");

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("address");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("email");

                entity.Property(e => e.Fullname)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("fullname");

                entity.Property(e => e.Mobilenumber)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("mobilenumber");

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("password");
            });

            modelBuilder.Entity<Appointment>(entity =>
            {
                entity.ToTable("appointment");

                entity.Property(e => e.AppointmentId)
                    .HasColumnType("int(11)")
                    .HasColumnName("appointmentId");

                entity.Property(e => e.DateApp)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("dateApp");

                entity.Property(e => e.PatientId)
                    .HasColumnType("int(11)")
                    .HasColumnName("patientId");

                entity.Property(e => e.Status)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("status");

                entity.Property(e => e.TimeApp)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("timeApp");
            });

            modelBuilder.Entity<Category>(entity =>
            {
                entity.ToTable("category");

                entity.Property(e => e.Id)
                    .HasColumnType("int(11)")
                    .HasColumnName("id");

                entity.Property(e => e.Categoryname)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("categoryname");
            });

            modelBuilder.Entity<Coursestrandyear>(entity =>
            {
                entity.ToTable("coursestrandyear");

                entity.Property(e => e.CourseStrandYearId).HasColumnType("int(11)");

                entity.Property(e => e.CourseStrandYearName)
                    .IsRequired()
                    .HasMaxLength(250);

                entity.Property(e => e.DepartmentId)
                    .HasColumnType("int(11)")
                    .HasColumnName("departmentId");
            });

            modelBuilder.Entity<Date>(entity =>
            {
                entity.ToTable("date");

                entity.Property(e => e.DateId)
                    .HasColumnType("int(11)")
                    .HasColumnName("dateID");

                entity.Property(e => e.Avadate)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("avadate");
            });

            modelBuilder.Entity<Department>(entity =>
            {
                entity.ToTable("department");

                entity.Property(e => e.DepartmentId)
                    .HasColumnType("int(11)")
                    .HasColumnName("departmentId");

                entity.Property(e => e.DepartmentName)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("departmentName");
            });

            modelBuilder.Entity<Doctor>(entity =>
            {
                entity.ToTable("doctor");

                entity.Property(e => e.DoctorId)
                    .HasColumnType("int(11)")
                    .HasColumnName("doctorId");

                entity.Property(e => e.DoctorAddress)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("doctorAddress");

                entity.Property(e => e.DoctorFirstName)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("doctorFirstName");

                entity.Property(e => e.DoctorGmailAcc)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("doctorGmailAcc");

                entity.Property(e => e.DoctorLastName)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("doctorLastName");

                entity.Property(e => e.Status)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("status");
            });

            modelBuilder.Entity<Employeehealthinformation>(entity =>
            {
                entity.HasKey(e => e.EphiId)
                    .HasName("PRIMARY");

                entity.ToTable("employeehealthinformation");

                entity.Property(e => e.EphiId)
                    .HasColumnType("int(11)")
                    .HasColumnName("ephiId");

                entity.Property(e => e.Basophil).HasColumnName("basophil");

                entity.Property(e => e.Basophilunits)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("basophilunits");

                entity.Property(e => e.Cbcdatetimerequested)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("cbcdatetimerequested");

                entity.Property(e => e.Cbcdrawdatetime)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("cbcdrawdatetime");

                entity.Property(e => e.Cbcphysician)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("cbcphysician");

                entity.Property(e => e.Datet)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("datet");

                entity.Property(e => e.Eosinophil)
                    .HasPrecision(10)
                    .HasColumnName("eosinophil");

                entity.Property(e => e.Eosinophilunits)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("eosinophilunits");

                entity.Property(e => e.EpiId)
                    .HasColumnType("int(11)")
                    .HasColumnName("EPI_ID");

                entity.Property(e => e.Hematocrit).HasColumnName("hematocrit");

                entity.Property(e => e.Hematocritunits)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("hematocritunits");

                entity.Property(e => e.Hemoglobin).HasColumnName("hemoglobin");

                entity.Property(e => e.Hemoglobinunits)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("hemoglobinunits");

                entity.Property(e => e.Hospitalnumber)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("hospitalnumber");

                entity.Property(e => e.Lymphocyte).HasColumnName("lymphocyte");

                entity.Property(e => e.Lymphocyteunits)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("lymphocyteunits");

                entity.Property(e => e.Mch).HasColumnName("mch");

                entity.Property(e => e.Mchc).HasColumnName("mchc");

                entity.Property(e => e.Mchcunits)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("mchcunits");

                entity.Property(e => e.Mchunits)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("mchunits");

                entity.Property(e => e.Mcv).HasColumnName("mcv");

                entity.Property(e => e.Mcvunits)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("mcvunits");

                entity.Property(e => e.Monocyte).HasColumnName("monocyte");

                entity.Property(e => e.Monocyteunits)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("monocyteunits");

                entity.Property(e => e.Mpv).HasColumnName("mpv");

                entity.Property(e => e.Mpvunits)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("mpvunits");

                entity.Property(e => e.Neutrophils).HasColumnName("neutrophils");

                entity.Property(e => e.Neutrophilsunits)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("neutrophilsunits");

                entity.Property(e => e.Plateletcount).HasColumnName("plateletcount");

                entity.Property(e => e.Plateletcountunits)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("plateletcountunits");

                entity.Property(e => e.Rbc).HasColumnName("rbc");

                entity.Property(e => e.Rbcunits)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("rbcunits");

                entity.Property(e => e.Rcdw).HasColumnName("rcdw");

                entity.Property(e => e.Rcdwunits)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("rcdwunits");

                entity.Property(e => e.Wbc).HasColumnName("wbc");

                entity.Property(e => e.Wbcunits)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("wbcunits");
            });

            modelBuilder.Entity<Employeepersonalinformation>(entity =>
            {
                entity.HasKey(e => e.EpiId)
                    .HasName("PRIMARY");

                entity.ToTable("employeepersonalinformation");

                entity.Property(e => e.EpiId)
                    .HasColumnType("int(11)")
                    .HasColumnName("EPI_ID");

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("address");

                entity.Property(e => e.AddressBarangay)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("addressBarangay");

                entity.Property(e => e.AddressMunicipality)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("addressMunicipality");

                entity.Property(e => e.AddressProvince)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("addressProvince");

                entity.Property(e => e.AddressPurok)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("addressPurok");

                entity.Property(e => e.Age)
                    .HasColumnType("int(11)")
                    .HasColumnName("age");

                entity.Property(e => e.Birthdate)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("birthdate");

                entity.Property(e => e.CourseStrandYearId)
                    .HasColumnType("int(11)")
                    .HasColumnName("courseStrandYearId");

                entity.Property(e => e.DepartmentId)
                    .HasColumnType("int(11)")
                    .HasColumnName("departmentId");

                entity.Property(e => e.EpiCode)
                    .HasColumnType("int(11)")
                    .HasColumnName("EPI_CODE");

                entity.Property(e => e.Firstname)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("firstname");

                entity.Property(e => e.Fullname)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("fullname");

                entity.Property(e => e.Gender)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("gender");

                entity.Property(e => e.Gmailaddress)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("gmailaddress");

                entity.Property(e => e.Lastname)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("lastname");

                entity.Property(e => e.Middlename)
                    .HasMaxLength(250)
                    .HasColumnName("middlename");

                entity.Property(e => e.Status)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("status");
            });

            modelBuilder.Entity<Equipment>(entity =>
            {
                entity.ToTable("equipment");

                entity.Property(e => e.EquipmentId)
                    .HasColumnType("int(11)")
                    .HasColumnName("equipmentId");

                entity.Property(e => e.EquipmentName)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("equipmentName");

                entity.Property(e => e.EquipmentStock)
                    .IsRequired()
                    .HasMaxLength(11)
                    .HasColumnName("equipmentStock");

                entity.Property(e => e.Status)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("status");
            });

            modelBuilder.Entity<Medicine>(entity =>
            {
                entity.ToTable("medicine");

                entity.Property(e => e.MedicineId)
                    .HasColumnType("int(11)")
                    .HasColumnName("medicineId");

                entity.Property(e => e.Category)
                    .HasColumnType("int(11)")
                    .HasColumnName("category");

                entity.Property(e => e.Datepurchased)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("datepurchased");

                entity.Property(e => e.Description)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("description");

                entity.Property(e => e.Dosage)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("dosage");

                entity.Property(e => e.Expirydate)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("expirydate");

                entity.Property(e => e.MedicineName)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("medicineName");

                entity.Property(e => e.MedicineStock)
                    .HasColumnType("int(11)")
                    .HasColumnName("medicineStock");

                entity.Property(e => e.Status)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("status");

                entity.Property(e => e.Units)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("units");
            });

            modelBuilder.Entity<Medicinestockhistory>(entity =>
            {
                entity.HasKey(e => e.MedicineStockId)
                    .HasName("PRIMARY");

                entity.ToTable("medicinestockhistory");

                entity.Property(e => e.MedicineStockId)
                    .HasColumnType("int(11)")
                    .HasColumnName("medicineStockId");

                entity.Property(e => e.AddedStock)
                    .HasColumnType("int(11)")
                    .HasColumnName("addedStock");

                entity.Property(e => e.Date)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("date");

                entity.Property(e => e.MedicineId)
                    .HasColumnType("int(11)")
                    .HasColumnName("medicineId");
            });

            modelBuilder.Entity<Normalrange>(entity =>
            {
                entity.ToTable("normalrange");

                entity.Property(e => e.NormalrangeId)
                    .HasColumnType("int(11)")
                    .HasColumnName("normalrangeId");

                entity.Property(e => e.Gender).HasMaxLength(250);

                entity.Property(e => e.MaxAge).HasColumnType("int(11)");

                entity.Property(e => e.MinAge).HasColumnType("int(11)");

                entity.Property(e => e.Test)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("test");

                entity.Property(e => e.UnitId).HasColumnType("int(11)");
            });

            modelBuilder.Entity<Nurse>(entity =>
            {
                entity.ToTable("nurse");

                entity.Property(e => e.NurseId)
                    .HasColumnType("int(11)")
                    .HasColumnName("nurseId");

                entity.Property(e => e.NurseAddress)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("nurseAddress");

                entity.Property(e => e.NurseFirstName)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("nurseFirstName");

                entity.Property(e => e.NurseGmail)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("nurseGmail");

                entity.Property(e => e.NurseLastName)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("nurseLastName");

                entity.Property(e => e.Status)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("status");
            });

            modelBuilder.Entity<Physician>(entity =>
            {
                entity.ToTable("physician");

                entity.Property(e => e.PhysicianId)
                    .HasColumnType("int(11)")
                    .HasColumnName("physicianId");

                entity.Property(e => e.Firstname)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("firstname");

                entity.Property(e => e.Fullname)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("fullname");

                entity.Property(e => e.Gender)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("gender");

                entity.Property(e => e.Lastname)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("lastname");

                entity.Property(e => e.Middlename)
                    .HasMaxLength(250)
                    .HasColumnName("middlename");
            });

            modelBuilder.Entity<Signup>(entity =>
            {
                entity.ToTable("signup");

                entity.Property(e => e.Id)
                    .HasColumnType("int(11)")
                    .HasColumnName("id");

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("address");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("email");

                entity.Property(e => e.Fullname)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("fullname");

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("password");
            });

            modelBuilder.Entity<Studenthealthinformation>(entity =>
            {
                entity.HasKey(e => e.ShiId)
                    .HasName("PRIMARY");

                entity.ToTable("studenthealthinformation");

                entity.Property(e => e.ShiId)
                    .HasColumnType("int(11)")
                    .HasColumnName("shiId");

                entity.Property(e => e.Basophil).HasColumnName("basophil");

                entity.Property(e => e.Basophilunits)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("basophilunits");

                entity.Property(e => e.Cbcdatetimerequested)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("cbcdatetimerequested");

                entity.Property(e => e.Cbcdrawdatetime)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("cbcdrawdatetime");

                entity.Property(e => e.Cbcphysician)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("cbcphysician");

                entity.Property(e => e.Datet)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("datet");

                entity.Property(e => e.Eosinophil)
                    .HasPrecision(10)
                    .HasColumnName("eosinophil");

                entity.Property(e => e.Eosinophilunits)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("eosinophilunits");

                entity.Property(e => e.Hematocrit).HasColumnName("hematocrit");

                entity.Property(e => e.Hematocritunits)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("hematocritunits");

                entity.Property(e => e.Hemoglobin).HasColumnName("hemoglobin");

                entity.Property(e => e.Hemoglobinunits)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("hemoglobinunits");

                entity.Property(e => e.Hospitalnumber)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("hospitalnumber");

                entity.Property(e => e.Lymphocyte).HasColumnName("lymphocyte");

                entity.Property(e => e.Lymphocyteunits)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("lymphocyteunits");

                entity.Property(e => e.Mch).HasColumnName("mch");

                entity.Property(e => e.Mchc).HasColumnName("mchc");

                entity.Property(e => e.Mchcunits)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("mchcunits");

                entity.Property(e => e.Mchunits)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("mchunits");

                entity.Property(e => e.Mcv).HasColumnName("mcv");

                entity.Property(e => e.Mcvunits)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("mcvunits");

                entity.Property(e => e.Monocyte).HasColumnName("monocyte");

                entity.Property(e => e.Monocyteunits)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("monocyteunits");

                entity.Property(e => e.Mpv).HasColumnName("mpv");

                entity.Property(e => e.Mpvunits)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("mpvunits");

                entity.Property(e => e.Neutrophils).HasColumnName("neutrophils");

                entity.Property(e => e.Neutrophilsunits)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("neutrophilsunits");

                entity.Property(e => e.Plateletcount).HasColumnName("plateletcount");

                entity.Property(e => e.Plateletcountunits)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("plateletcountunits");

                entity.Property(e => e.Rbc).HasColumnName("rbc");

                entity.Property(e => e.Rbcunits)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("rbcunits");

                entity.Property(e => e.Rcdw).HasColumnName("rcdw");

                entity.Property(e => e.Rcdwunits)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("rcdwunits");

                entity.Property(e => e.SpiId)
                    .HasColumnType("int(11)")
                    .HasColumnName("SPI_ID");

                entity.Property(e => e.Wbc).HasColumnName("wbc");

                entity.Property(e => e.Wbcunits)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("wbcunits");
            });

            modelBuilder.Entity<Studentpersonalinformation>(entity =>
            {
                entity.HasKey(e => e.SpiId)
                    .HasName("PRIMARY");

                entity.ToTable("studentpersonalinformation");

                entity.Property(e => e.SpiId)
                    .HasColumnType("int(11)")
                    .HasColumnName("SPI_ID");

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("address");

                entity.Property(e => e.AddressBarangay)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("addressBarangay");

                entity.Property(e => e.AddressMunicipality)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("addressMunicipality");

                entity.Property(e => e.AddressProvince)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("addressProvince");

                entity.Property(e => e.AddressPurok)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("addressPurok");

                entity.Property(e => e.Age)
                    .HasColumnType("int(11)")
                    .HasColumnName("age");

                entity.Property(e => e.Birthdate)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("birthdate");

                entity.Property(e => e.CourseStrandYearId)
                    .HasColumnType("int(11)")
                    .HasColumnName("courseStrandYearId");

                entity.Property(e => e.DepartmentId)
                    .HasColumnType("int(11)")
                    .HasColumnName("departmentId");

                entity.Property(e => e.Firstname)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("firstname");

                entity.Property(e => e.Fullname)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("fullname");

                entity.Property(e => e.Gender)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("gender");

                entity.Property(e => e.Gmailaddress)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("gmailaddress");

                entity.Property(e => e.Lastname)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("lastname");

                entity.Property(e => e.Middlename)
                    .HasMaxLength(250)
                    .HasColumnName("middlename");

                entity.Property(e => e.SpiCode)
                    .HasColumnType("int(11)")
                    .HasColumnName("SPI_CODE");

                entity.Property(e => e.Status)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("status");
            });

            modelBuilder.Entity<Time>(entity =>
            {
                entity.ToTable("time");

                entity.Property(e => e.TimeId)
                    .HasColumnType("int(11)")
                    .HasColumnName("timeID");

                entity.Property(e => e.Avatime)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("avatime");

                entity.Property(e => e.DateId)
                    .HasColumnType("int(11)")
                    .HasColumnName("dateId");

                entity.Property(e => e.TimeSlot)
                    .HasColumnType("int(11)")
                    .HasColumnName("timeSlot");
            });

            modelBuilder.Entity<Unit>(entity =>
            {
                entity.ToTable("unit");

                entity.Property(e => e.UnitId)
                    .HasColumnType("int(11)")
                    .HasColumnName("unitId");

                entity.Property(e => e.Unitname)
                    .IsRequired()
                    .HasMaxLength(250)
                    .HasColumnName("unitname");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
